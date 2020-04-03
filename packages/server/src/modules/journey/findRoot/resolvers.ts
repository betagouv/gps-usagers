import { getManager } from "typeorm";
import { Journey } from "../../../entity/Journey";
import { ResolverMap } from "../../../types/graphql-utils";

export const resolvers: ResolverMap = {
  Query: {
    findRootJourneys: async (_, {}, {}) => {
      const manager = getManager();
      const trees = await manager.getTreeRepository(Journey);

      return trees.findRoots();
    }
  }
};
