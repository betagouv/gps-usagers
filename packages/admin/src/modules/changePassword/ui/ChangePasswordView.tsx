import { changePasswordSchema } from "@gpsu/common";
import {
  ForgotPasswordChangeMutationVariables,
  NormalizedErrorMap
} from "@gpsu/controller";
import { Field, FormikProps, withFormik } from "formik";
import * as React from "react";
import { Button } from "rebass";
import { InputField } from "../../shared/InputField";

interface FormValues {
  newPassword: string;
}

interface Props {
  onFinish: () => void;
  token: string;
  submit: (
    values: ForgotPasswordChangeMutationVariables
  ) => Promise<NormalizedErrorMap | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    return (
      <form style={{ display: "flex" }}>
        <div style={{ width: 400, margin: "auto" }}>
          <Field
            name="newPassword"
            type="password"
            placeholder="New Password"
            // prefix={
            //   <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} /> as any
            // }
            component={InputField}
          />
          <Button
            type="primary"
            // htmlType="submit"
            className="login-form-button"
          >
            change password
          </Button>
        </div>
      </form>
    );
  }
}

export const ChangePasswordView = withFormik<Props, FormValues>({
  validationSchema: changePasswordSchema,
  mapPropsToValues: () => ({ newPassword: "" }),
  handleSubmit: async ({ newPassword }, { props, setErrors }) => {
    const errors = await props.submit({ newPassword, key: props.token });
    if (errors) {
      setErrors(errors);
    } else {
      props.onFinish();
    }
  }
})(C);
