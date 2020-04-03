import { getConnection, getManager } from "typeorm";
import { Journey } from "../../../entity/Journey";
// import { User } from "../../../entity/User";
// import { JourneyRepository } from "../../../repository/JourneyRepository";
// import { ProfessionalRepository } from "../../../repository/ProfessionalRepository";
import { ResolverMap } from "../../../types/graphql-utils";

export const resolvers: ResolverMap = {
  Mutation: {
    createJourney: async (_, { input: { ...data } }) => {
      const { parent } = data;
      const currentParent = await getConnection()
        .createQueryBuilder()
        .select("journey")
        .from(Journey, "journey")
        .where("journey.id = :id", {
          id: parent
        })
        .getOne();

      const manager = getManager();
      const journey = await manager.getRepository(Journey).save({
        ...data,
        parent: currentParent || null
      });

      const trees = await manager.getTreeRepository(Journey);
      const parentAncestor = await trees
        .createAncestorsQueryBuilder("journey", "journeyClosure", journey)
        .getOne();

      return { ...journey, parent: parentAncestor };
    }
  }
};
