// @ts-ignore
import gql from "graphql-tag";
import * as React from "react";
import { Query } from "react-apollo";
import {
  FindDescendantJourneysQuery,
  FindDescendantJourneysQuery_findDescendantJourneys
} from "../../../schemaTypes";

export const findDescendantJourneysQuery = gql`
  query FindDescendantJourneysQuery($parentJourneyId: String) {
    findDescendantJourneys(parentJourneyId: $parentJourneyId) {
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
      ancestors {
        id
        name
      }
      children {
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
  }
`;

export interface WithFindDescendantJourneys {
  findDescendantJourneys: FindDescendantJourneysQuery_findDescendantJourneys | null;
  loading: boolean;
}

interface Props {
  parentJourneyId: string | null;
  children: (data: WithFindDescendantJourneys) => JSX.Element | null;
}

export class FindDescendantJourneys extends React.PureComponent<Props> {
  render() {
    const { children, parentJourneyId } = this.props;

    return (
      <Query<FindDescendantJourneysQuery>
        query={findDescendantJourneysQuery}
        variables={{ parentJourneyId }}
      >
        {({ data, loading }) => {
          let findDescendantJourneys: FindDescendantJourneysQuery_findDescendantJourneys | null = null;

          if (data && data.findDescendantJourneys) {
            findDescendantJourneys = data.findDescendantJourneys;
          }

          return children({
            findDescendantJourneys,
            loading
          });
        }}
      </Query>
    );
  }
}
