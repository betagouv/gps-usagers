import { getCustomRepository, getManager } from "typeorm";
import { Journey } from "../../../entity/Journey";
import { JourneyRepository } from "../../../repository/JourneyRepository";
import { ResolverMap } from "../../../types/graphql-utils";

export const resolvers: ResolverMap = {
  Mutation: {
    updateJourney: async (_, { input: { id, ...rest } }) => {
      const {
        raw: [journey]
      } = await getCustomRepository(JourneyRepository).updateJourney(id, rest);

      const manager = getManager();
      const trees = await manager.getTreeRepository(Journey);

      const parent = await trees
        .createAncestorsQueryBuilder("journey", "journeyClosure", journey)
        .getOne();

      return {
        ...journey,
        parent
      };
    }
  }
};
