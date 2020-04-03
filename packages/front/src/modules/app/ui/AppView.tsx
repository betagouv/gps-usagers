import { FindRootJourneysQuery_findRootJourneys } from "@gpsu/controller";
import * as React from "react";
import { NavLink } from "react-router-dom";
import { Flex, Heading } from "rebass";
import FinalScreen from "../../../components/FinalScreen";
import Nav from "../../../components/Nav";
import { SelectorCard, SelectorChoice } from "../../../components/Selector";
import Title from "../../../components/Title";

interface IProps {
  findJourneys: FindRootJourneysQuery_findRootJourneys[];
  journeyId: string;
}

const AppView: React.FunctionComponent<IProps> = ({
  findJourneys,
  journeyId
}) => {
  const currentJourney = findJourneys.filter(
    ({ id, isActive }: { id: string; isActive: boolean | null }) =>
      isActive && id === journeyId
  )[0];

  return (
    <Flex width={1} p={4} flexDirection="column">
      <Title mb={5}>Comment peut-on vous aider ?</Title>
      {journeyId && <Nav {...currentJourney} />}

      {currentJourney && (
        <Heading
          fontWeight={400}
          fontSize={9}
          color="blue"
          ml={3}
          mt={5}
          mb={2}
        >
          {currentJourney.title}
        </Heading>
      )}

      <Flex
        flexDirection={
          currentJourney && currentJourney.type === "journey" ? "column" : "row"
        }
        flexWrap="wrap"
      >
        {findJourneys
          .filter(
            ({ id, isActive }: { id: string; isActive: boolean | null }) =>
              isActive && id !== journeyId
          )
          .map((journey: FindRootJourneysQuery_findRootJourneys) => (
            <>
              {currentJourney &&
                currentJourney.type === "journey" &&
                journey.type !== "final" && (
                  <NavLink key={journey.id} to={`/journeys/${journey.id}`}>
                    <SelectorCard {...journey} />
                  </NavLink>
                )}
              {((currentJourney && currentJourney.type === "choice") ||
                (!currentJourney && journey)) && (
                <NavLink key={journey.id} to={`/journeys/${journey.id}`}>
                  <SelectorChoice {...journey} />
                </NavLink>
              )}
              {journey.type === "final" && <FinalScreen {...journey} />}
            </>
          ))}
      </Flex>
    </Flex>
  );
};

export default AppView;
