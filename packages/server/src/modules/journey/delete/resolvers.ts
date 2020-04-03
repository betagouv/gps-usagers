import { getCustomRepository } from "typeorm";
import { JourneyRepository } from "../../../repository/JourneyRepository";
import { ResolverMap } from "../../../types/graphql-utils";

export const resolvers: ResolverMap = {
  Mutation: {
    deleteJourney: async (_, { journeyId }) => {
      const journey = await getCustomRepository(
        JourneyRepository
      ).findJourneyById(journeyId);

      await getCustomRepository(JourneyRepository).deleteJourney(journeyId);
      return journey;
    }
  }
};
