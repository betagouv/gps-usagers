import { FindDescendantJourneysQuery_findDescendantJourneys } from "@gpsu/controller";
import * as React from "react";
import { NavLink } from "react-router-dom";
import { Flex, Heading } from "rebass";
import FinalScreen from "../../../components/FinalScreen";
import Nav from "../../../components/Nav";
import { SelectorCard, SelectorChoice } from "../../../components/Selector";
import Title from "../../../components/Title";

interface IProps {
  findJourneys: FindDescendantJourneysQuery_findDescendantJourneys;
}

const JourneyView: React.FunctionComponent<IProps> = ({ findJourneys }) => {
  return (
    <Flex width={1} p={4} flexDirection="column">
      <Title mb={5}>Comment peut-on vous aider ?</Title>
      <Nav {...findJourneys} />
      {console.log("WOONIES LOG: findJourneys", findJourneys)}

      {findJourneys && (
        <Heading
          fontWeight={400}
          fontSize={9}
          color="blue"
          ml={3}
          mt={5}
          mb={2}
        >
          {findJourneys.title}
        </Heading>
      )}

      <Flex
        flexDirection={
          findJourneys && findJourneys.type === "journey" ? "column" : "row"
        }
        flexWrap="wrap"
      >
        {findJourneys.children &&
          findJourneys.children.map(
            (journey: FindDescendantJourneysQuery_findDescendantJourneys) => (
              <React.Fragment key={journey.id}>
                {findJourneys &&
                  findJourneys.type === "journey" &&
                  journey.type !== "final" && (
                    <NavLink to={`/journeys/${journey.id}`}>
                      <SelectorCard {...journey} />
                    </NavLink>
                  )}
                {((findJourneys && findJourneys.type === "choice") ||
                  (!findJourneys && journey)) && (
                  <NavLink to={`/journeys/${journey.id}`}>
                    <SelectorChoice {...journey} />
                  </NavLink>
                )}
                {journey.type === "final" && <FinalScreen {...journey} />}
              </React.Fragment>
            )
          )}
      </Flex>
    </Flex>
  );
};

export default JourneyView;
