// @ts-ignore
import gql from "graphql-tag";
import * as React from "react";
import { Mutation, MutationFn } from "react-apollo";
import {
  UpdateJourneyMutation,
  UpdateJourneyMutationVariables
} from "../../../schemaTypes";
import { findDescendantJourneysQuery } from "../FindDescendant";
import { findRootJourneysQuery } from "../FindRoot";

export const updateJourneyMutation = gql`
  mutation UpdateJourneyMutation($input: UpdateJourneyInput!) {
    updateJourney(input: $input) {
      id
      type
      name
      title
      description
      icon
      color
      order
      isActive
      data {
        type
        value
        link
        address
        zip
        city
      }
      parent {
        id
        name
      }
    }
  }
`;

export interface WithUpdateJourney {
  updateJourney: MutationFn<
    UpdateJourneyMutation,
    UpdateJourneyMutationVariables
  >;
}

interface Props {
  children: (data: WithUpdateJourney) => JSX.Element | null;
}

export class JourneyUpdate extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;
    return (
      <Mutation<UpdateJourneyMutation, UpdateJourneyMutationVariables>
        mutation={updateJourneyMutation}
        awaitRefetchQueries={true}
        refetchQueries={props => {
          const {
            data: {
              updateJourney: {
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
            updateJourney: mutate
          });
        }}
      </Mutation>
    );
  }
}
