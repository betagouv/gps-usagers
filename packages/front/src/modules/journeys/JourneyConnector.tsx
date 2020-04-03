import { FindDescendantJourneys } from "@gpsu/controller";
import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import Layout from "../../components/Layout";
import JourneyView from "./ui/JourneyView";

export class JourneyConnector extends React.PureComponent<
  RouteComponentProps<{ journeyId: string }>
> {
  render() {
    const {
      match: {
        params: { journeyId }
      }
    } = this.props;
    return (
      <Layout>
        <FindDescendantJourneys parentJourneyId={journeyId}>
          {({ findDescendantJourneys, loading }) => {
            if (loading) {
              return <></>;
            }

            return (
              findDescendantJourneys && (
                <JourneyView findJourneys={findDescendantJourneys} />
              )
            );
          }}
        </FindDescendantJourneys>
      </Layout>
    );
  }
}
