// @ts-ignore
import gql from "graphql-tag";
import * as React from "react";
import { Query } from "react-apollo";
import {
  ReadJourneyQuery,
  ReadJourneyQueryVariables,
  ReadJourneyQuery_readJourney
} from "../../../schemaTypes";

export const readJourneyQuery = gql`
  query ReadJourneyQuery($journeyId: String!) {
    readJourney(journeyId: $journeyId) {
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

export interface WithReadJourney {
  readJourney: ReadJourneyQuery_readJourney | null;
  loading: boolean;
}

interface Props {
  journeyId: string;
  children: (data: WithReadJourney) => JSX.Element | null;
}

export class ReadJourney extends React.PureComponent<Props> {
  render() {
    const { children, journeyId } = this.props;
    return (
      <Query<ReadJourneyQuery, ReadJourneyQueryVariables>
        query={readJourneyQuery}
        variables={{ journeyId }}
      >
        {({ data, loading }) => {
          let readJourney: ReadJourneyQuery_readJourney | null = null;

          if (data && data.readJourney) {
            readJourney = data.readJourney;
          }

          return children({
            readJourney,
            loading
          });
        }}
      </Query>
    );
  }
}
