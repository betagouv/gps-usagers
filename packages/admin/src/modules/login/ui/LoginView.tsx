import { loginSchema } from "@gpsu/common";
import { NormalizedErrorMap } from "@gpsu/controller";
import { Form, Field, FormikProps, withFormik } from "formik";
import * as React from "react";
import { Box, Flex, Heading } from "rebass";
import { InputField, ButtonForm } from "../../../design";

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  onFinish: () => void;
  submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    return (
      <Flex width="40rem" flexDirection="column">
        <Heading letterSpacing={1.5} color="white" fontSize={6}>
          ADMINISTRATION
        </Heading>
        <Heading lineHeight={1} mb={6} color="white" fontSize={13}>
          GPS USAGERS
        </Heading>
        <Form>
          <Box>
            <Field
              label="E-mail"
              name="email"
              placeholder="Email"
              component={InputField}
              color="white"
              mb={4}
            />
            <Field
              name="password"
              type="password"
              placeholder="Mot de passe"
              label="Mot de passe"
              component={InputField}
              color="white"
              mb={4}
            />
            <ButtonForm type="submit" px={6} variant="green">
              Connexion
            </ButtonForm>
          </Box>
        </Form>
      </Flex>
    );
  }
}

export const LoginView = withFormik<Props, FormValues>({
  validationSchema: loginSchema,
  validateOnChange: false,
  validateOnBlur: false,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    } else {
      props.onFinish();
    }
  }
})(C);
