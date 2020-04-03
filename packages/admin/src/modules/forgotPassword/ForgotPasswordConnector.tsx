import { ForgotPasswordController } from "@gpsu/controller";
import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { ForgotPasswordView } from "./ui/ForgotPasswordView";

export class ForgotPasswordConnector extends React.PureComponent<
  RouteComponentProps<{}>
> {
  onFinish = () => {
    this.props.history.push("/m/reset-password", {
      message: "check your email to reset your password"
    });
  };

  render() {
    return (
      <ForgotPasswordController>
        {({ submit }) => (
          <ForgotPasswordView onFinish={this.onFinish} submit={submit} />
        )}
      </ForgotPasswordController>
    );
  }
}
