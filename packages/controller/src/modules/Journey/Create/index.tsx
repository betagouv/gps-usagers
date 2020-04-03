// @ts-ignore
import gql from "graphql-tag";
import * as React from "react";
import { Mutation, MutationFn } from "react-apollo";
import {
  CreateJourneyMutation,
  CreateJourneyMutationVariables
} from "../../../schemaTypes";
import { findDescendantJourneysQuery } from "../FindDescendant";
import { findRootJourneysQuery } from "../FindRoot";

export const createJourneyMutation = gql`
  mutation CreateJourneyMutation($input: CreateJourneyInput!) {
    createJourney(input: $input) {
      id
      type
      name
      title
      description
      icon
      color
      order
      isActive
      parent {
        id
        name
      }
    }
  }
`;

export interface WithCreateJourney {
  createJourney: MutationFn<
    CreateJourneyMutation,
    CreateJourneyMutationVariables
  >;
}

interface Props {
  children: (data: WithCreateJourney) => JSX.Element | null;
}

export class JourneyCreate extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;
    return (
      <Mutation<CreateJourneyMutation, CreateJourneyMutationVariables>
        mutation={createJourneyMutation}
        awaitRefetchQueries={true}
        refetchQueries={props => {
          const {
            data: {
              createJourney: {
                parent: { id }
              }
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
                parentJourneyId: id
              }
            }
          ];
        }}
      >
        {mutate => {
          return children({
            createJourney: mutate
          });
        }}
      </Mutation>
    );
  }
}
