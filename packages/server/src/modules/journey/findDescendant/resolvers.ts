import { getConnection, getManager } from "typeorm";
import { Journey } from "../../../entity/Journey";
import { ResolverMap } from "../../../types/graphql-utils";

export const resolvers: ResolverMap = {
  Query: {
    findDescendantJourneys: async (_, { parentJourneyId }, {}) => {
      const currentParent = await getConnection()
        .createQueryBuilder()
        .select("journey")
        .from(Journey, "journey")
        .where("journey.id = :id", {
          id: parentJourneyId
        })
        .getOne();

      const manager = getManager();
      const trees = await manager.getTreeRepository(Journey);

      if (currentParent) {
        const descendant = await trees.findDescendantsTree(currentParent);
        const ancestors = await trees.findAncestors(currentParent);

        const parent = await trees
          .createAncestorsQueryBuilder(
            "journey",
            "journeyClosure",
            currentParent
          )
          .andWhere("journey.id != :id", { id: parentJourneyId })
          .getOne();

        return {
          ...descendant,
          children: descendant.children.sort((a, b) =>
            a.order > b.order ? 1 : -1
          ),
          parent,
          ancestors: ancestors.reverse()
        };
      } else {
        return null;
      }
    }
  }
};
