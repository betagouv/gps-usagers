import { NormalizedErrorMap } from "@gpsu/controller";
import { Field, FormikProps, withFormik } from "formik";
import * as React from "react";
import { Button } from "rebass";
import { InputField } from "../../shared/InputField";

interface FormValues {
  email: string;
}

interface Props {
  onFinish: () => void;
  submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    return (
      <form style={{ display: "flex" }}>
        <div style={{ width: 400, margin: "auto" }}>
          <Field
            name="email"
            // prefix={
            //   <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} /> as any
            // }
            placeholder="Email"
            component={InputField}
          />
          <Button
            type="primary"
            // htmlType="submit"
            className="login-form-button"
          >
            reset password
          </Button>
        </div>
      </form>
    );
  }
}

export const ForgotPasswordView = withFormik<Props, FormValues>({
  mapPropsToValues: () => ({ email: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    } else {
      props.onFinish();
    }
  }
})(C);
