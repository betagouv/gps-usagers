import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import Layout from "../../components/Layout";

export class Statistics extends React.PureComponent<RouteComponentProps<{}>> {
  render() {
    return (
      <Layout>
        <h2>STATISTIQUES D'UTILISATION</h2>
      </Layout>
    );
  }
}
