// @ts-ignore
import gql from "graphql-tag";
import * as React from "react";
import { Mutation, MutationFn } from "react-apollo";
import {
  DeleteJourneyMutation,
  DeleteJourneyMutationVariables
} from "../../../schemaTypes";
import { findDescendantJourneysQuery } from "../FindDescendant";
import { findRootJourneysQuery } from "../FindRoot";

export const deleteJourneyMutation = gql`
  mutation DeleteJourneyMutation($journeyId: String!) {
    deleteJourney(journeyId: $journeyId) {
      id
      type
      name
      title
      description
      icon
      color
      order
      isActive
    }
  }
`;

export interface WithDeleteJourney {
  deleteJourney: MutationFn<
    DeleteJourneyMutation,
    DeleteJourneyMutationVariables
  >;
}

interface Props {
  children: (data: WithDeleteJourney) => JSX.Element | null;
}

export class JourneyDelete extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;
    return (
      <Mutation<DeleteJourneyMutation, DeleteJourneyMutationVariables>
        mutation={deleteJourneyMutation}
        awaitRefetchQueries={true}
        refetchQueries={props => {
          const {
            data: {
              createJourney: { parentId }
            }
          } = props;
          return [
            {
              query: findRootJourneysQuery,
              fetchPolicy: "cache-and-network"
            },
            {
              query: findDescendantJourneysQuery,
              fetchPolicy: "cache-and-network",
              variables: {
                parentJourneyId: parentId
              }
            }
          ];
        }}
      >
        {mutate => {
          return children({
            deleteJourney: mutate
          });
        }}
      </Mutation>
    );
  }
}
