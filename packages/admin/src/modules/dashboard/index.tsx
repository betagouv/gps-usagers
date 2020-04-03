import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import Layout from "../../components/Layout";

export class Dashboard extends React.PureComponent<RouteComponentProps<{}>> {
  render() {
    return (
      <Layout>
        <h2>DASHBOARD</h2>
      </Layout>
    );
  }
}
