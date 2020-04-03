"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectRedis = require("connect-redis");
const express = require("express");
const RateLimit = require("express-rate-limit");
const session = require("express-session");
const graphql_redis_subscriptions_1 = require("graphql-redis-subscriptions");
const graphql_yoga_1 = require("graphql-yoga");
const RateLimitRedisStore = require("rate-limit-redis");
require("reflect-metadata");
const constants_1 = require("./constants");
const UserLoader_1 = require("./loaders/UserLoader");
const redis_1 = require("./redis");
const confirmEmail_1 = require("./routes/confirmEmail");
const createTestConn_1 = require("./testUtils/createTestConn");
const createTypeormConn_1 = require("./utils/createTypeormConn");
const genSchema_1 = require("./utils/genSchema");
require("dotenv-safe").config();
const SESSION_SECRET = "ajslkjalksjdfkl";
const RedisStore = connectRedis(session);
exports.startServer = () => __awaiter(this, void 0, void 0, function* () {
    if (process.env.NODE_ENV === "test") {
        yield redis_1.redis.flushall();
    }
    const schema = genSchema_1.genSchema();
    const pubsub = new graphql_redis_subscriptions_1.RedisPubSub(process.env.NODE_ENV === "production"
        ? {
            connection: process.env.REDIS_URL
        }
        : {});
    const server = new graphql_yoga_1.GraphQLServer({
        schema,
        context: ({ request, response }) => ({
            redis: redis_1.redis,
            url: request ? request.protocol + "://" + request.get("host") : "",
            session: request ? request.session : undefined,
            req: request,
            res: response,
            userLoader: UserLoader_1.userLoader(),
            pubsub
        })
    });
    server.express.use(new RateLimit({
        store: new RateLimitRedisStore({
            client: redis_1.redis
        }),
        windowMs: 15 * 60 * 1000,
        max: 100,
        delayMs: 0
    }));
    server.express.use(session({
        store: new RedisStore({
            client: redis_1.redis,
            prefix: constants_1.redisSessionPrefix
        }),
        name: "qid",
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: false,
            maxAge: 1000 * 60 * 60 * 24 * 7
        }
    }));
    server.express.use("/images", express.static("images"));
    const whitelist = [
        process.env.ADMIN_HOST,
        process.env.FRONT_HOST,
        process.env.SERVER_URL
    ];
    let cors;
    cors = {
        credentials: true,
        origin: (origin, callback) => {
            if (whitelist.indexOf(origin) !== -1) {
                callback(null, true);
            }
            else {
                callback(new Error("Not allowed by CORS"));
            }
        }
    };
    server.express.get("/confirm/:id", confirmEmail_1.confirmEmail);
    if (process.env.NODE_ENV === "test") {
        yield createTestConn_1.createTestConn(true);
    }
    else {
        yield createTypeormConn_1.createTypeormConn();
    }
    const port = process.env.PORT || 4000;
    const app = yield server.start({
        cors,
        port: process.env.NODE_ENV === "test" ? 0 : port
    });
    console.log("Server is running on localhost:4000");
    return app;
});
//# sourceMappingURL=startServer.js.map