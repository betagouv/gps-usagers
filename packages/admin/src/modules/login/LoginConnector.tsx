import * as React from "react";
import { LoginController } from "@gpsu/controller";
import { RouteComponentProps } from "react-router-dom";
import LayoutAuth from "../../components/Layout/Auth";

import { LoginView } from "./ui/LoginView";

export class LoginConnector extends React.PureComponent<
  RouteComponentProps<{}>
> {
  onFinish = () => {
    const {
      history,
      location: { state }
    } = this.props;
    if (state && state.next) {
      return history.push(state.next);
    }

    history.push("/");
  };

  render() {
    return (
      <LayoutAuth>
        <LoginController>
          {({ submit }) => (
            <LoginView onFinish={this.onFinish} submit={submit} />
          )}
        </LoginController>
      </LayoutAuth>
    );
  }
}
