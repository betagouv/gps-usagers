import { getCustomRepository } from "typeorm";
import { JourneyRepository } from "../../../repository/JourneyRepository";
import { ResolverMap } from "../../../types/graphql-utils";

export const resolvers: ResolverMap = {
  Mutation: {
    orderJourneys: async (_, { input: data }) => {
      await data.map(({ id, order }: { id: string; order: number }) =>
        getCustomRepository(JourneyRepository).updateJourney(id, {
          order
        })
      );

      return true;
    }
  }
};
