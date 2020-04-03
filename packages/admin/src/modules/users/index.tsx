import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import Layout from "../../components/Layout";

export class Users extends React.PureComponent<RouteComponentProps<{}>> {
  render() {
    return (
      <Layout>
        <h2>ADMINISTARTIUON DES UTILISATEURS</h2>
      </Layout>
    );
  }
}
