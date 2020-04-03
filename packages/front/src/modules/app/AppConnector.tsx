import { FindRootJourneys } from "@gpsu/controller";
import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import Layout from "../../components/Layout";
import AppView from "./ui/AppView";

export class AppConnector extends React.PureComponent<
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
        <FindRootJourneys parentJourneyId={journeyId}>
          {({ findRootJourneys, loading }) => {
            if (loading) {
              return <></>;
            }

            return (
              findRootJourneys && (
                <AppView
                  findJourneys={findRootJourneys}
                  journeyId={journeyId}
                />
              )
            );
          }}
        </FindRootJourneys>
      </Layout>
    );
  }
}
