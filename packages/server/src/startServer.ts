import * as connectRedis from "connect-redis";
// import { applyMiddleware } from "graphql-middleware";
import * as express from "express";
import * as RateLimit from "express-rate-limit";
import * as session from "express-session";
import { RedisPubSub } from "graphql-redis-subscriptions";
import { GraphQLServer } from "graphql-yoga";
import * as RateLimitRedisStore from "rate-limit-redis";
import "reflect-metadata";
import { redisSessionPrefix } from "./constants";
// import { middlewareShield } from "./shield";
// import { middleware } from "./middleware";
import { userLoader } from "./loaders/UserLoader";
import { redis } from "./redis";
import { confirmEmail } from "./routes/confirmEmail";
import { createTestConn } from "./testUtils/createTestConn";
import { createTypeormConn } from "./utils/createTypeormConn";
import { genSchema } from "./utils/genSchema";
// tslint:disable-next-line:no-var-requires
require("dotenv-safe").config();

const SESSION_SECRET = "ajslkjalksjdfkl";
const RedisStore = connectRedis(session as any);

export const startServer = async () => {
  if (process.env.NODE_ENV === "test") {
    await redis.flushall();
  }

  const schema = genSchema() as any;
  // applyMiddleware(schema, middleware);

  const pubsub = new RedisPubSub(
    process.env.NODE_ENV === "production"
      ? {
          connection: process.env.REDIS_URL as any
        }
      : {}
  );

  const server = new GraphQLServer({
    schema,
    context: ({ request, response }) => ({
      redis,
      url: request ? request.protocol + "://" + request.get("host") : "",
      session: request ? request.session : undefined,
      req: request,
      res: response,
      userLoader: userLoader(),
      pubsub
    })
  });

  server.express.use(
    new RateLimit({
      store: new RateLimitRedisStore({
        client: redis
      }),
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
      delayMs: 0 // disable delaying - full speed until the max limit is reached
    })
  );

  server.express.use(
    session({
      store: new RedisStore({
        client: redis as any,
        prefix: redisSessionPrefix
      }),
      name: "qid",
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        // secure: process.env.NODE_ENV === "production",
        secure: false,
        maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
      }
    } as any)
  );

  server.express.use("/images", express.static("images"));

  const whitelist = [
    process.env.ADMIN_HOST as string,
    process.env.FRONT_HOST as string,
    process.env.SERVER_URL as string
  ];

  let cors;
  cors = {
    credentials: true,
    // @ts-ignore
    origin: (origin, callback) => {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    }
  };

  // const cors = {
  //   credentials: true,
  //   origin:
  //     process.env.NODE_ENV === "test" ? "*" : (process.env.ADMIN_HOST as string)
  // };

  server.express.get("/confirm/:id", confirmEmail);

  if (process.env.NODE_ENV === "test") {
    await createTestConn(true);
  } else {
    await createTypeormConn();
    // await conn.runMigrations();
  }

  // clear cache
  // await redis.del(listingCacheKey);
  // fill cache
  // const listings = await Listing.find();
  // const listingStrings = listings.map(x => JSON.stringify(x));
  // if (listingStrings.length) {
  //   await redis.lpush(listingCacheKey, ...listingStrings);
  // }
  // console.log(await redis.lrange(listingCacheKey, 0, -1));

  const port = process.env.PORT || 4000;
  const app = await server.start({
    cors,
    port: process.env.NODE_ENV === "test" ? 0 : port
  });
  console.log("Server is running on localhost:4000");

  return app;
};
