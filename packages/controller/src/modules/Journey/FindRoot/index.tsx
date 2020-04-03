// @ts-ignore
import gql from "graphql-tag";
import * as React from "react";
import { Query } from "react-apollo";
import {
  FindRootJourneysQuery,
  FindRootJourneysQuery_findRootJourneys
} from "../../../schemaTypes";

export const findRootJourneysQuery = gql`
  query FindRootJourneysQuery($parentJourneyId: String) {
    findRootJourneys(parentJourneyId: $parentJourneyId) {
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
    }
  }
`;

export interface WithFindRootJourneys {
  findRootJourneys: FindRootJourneysQuery_findRootJourneys[] | null;
  loading: boolean;
}

interface Props {
  parentJourneyId: string | null;
  children: (data: WithFindRootJourneys) => JSX.Element | null;
}

export class FindRootJourneys extends React.PureComponent<Props> {
  render() {
    const { children, parentJourneyId } = this.props;

    return (
      <Query<FindRootJourneysQuery>
        query={findRootJourneysQuery}
        variables={{ parentJourneyId }}
      >
        {({ data, loading }) => {
          let findRootJourneys:
            | FindRootJourneysQuery_findRootJourneys[]
            | null = null;

          if (data && data.findRootJourneys) {
            findRootJourneys = data.findRootJourneys;
          }

          return children({
            findRootJourneys,
            loading
          });
        }}
      </Query>
    );
  }
}
