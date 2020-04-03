import { getConnection } from "typeorm";
import { Journey } from "../../../entity/Journey";
import { ResolverMap } from "../../../types/graphql-utils";

export const resolvers: ResolverMap = {
  Query: {
    readJourney: async (_, { journeyId }, {}) => {
      return getConnection()
        .createQueryBuilder()
        .select("journey")
        .from(Journey, "journey")
        .where("journey.id = :id", { id: journeyId })
        .getOne();
    }
  }
};
