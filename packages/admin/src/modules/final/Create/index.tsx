import { CreateJourneyInput, JourneyCreate } from "@gpsu/controller";
import { Field, Form, Formik, FormikActions, FormikProps } from "formik";
import * as React from "react";
import { Box, Button, Flex, Heading } from "rebass";
import { InputField, Textarea } from "../../../design";

interface IProps {
  parent: string | null;
  closeModal: () => void;
}

export default class FinalCreateForm extends React.Component<IProps, any> {
  public render() {
    const { closeModal, parent } = this.props;
    return (
      <JourneyCreate>
        {({ createJourney }) => (
          <Box width="60rem" p={5}>
            <Formik
              initialValues={{ name: "", parent, type: "final" }}
              onSubmit={async (
                values: CreateJourneyInput,
                { resetForm }: FormikActions<CreateJourneyInput>
              ) => {
                await createJourney({
                  variables: { input: values }
                });
                resetForm();
                closeModal();
              }}
              render={(formikBag: FormikProps<any>) => (
                <Form>
                  <Box p={4}>
                    <Heading fontSize={9}>Créer un écran final</Heading>
                    <Box my={4}>
                      <Field
                        label="Nom de l'écran final"
                        name="name"
                        component={InputField}
                      />
                    </Box>
                    <Box my={4}>
                      <Field
                        name="description"
                        label="Description courte"
                        component={Textarea}
                      />
                    </Box>
                    {formikBag.errors.name && (
                      <div id="feedback">{formikBag.errors.name}</div>
                    )}
                    <Flex justifyContent="flex-end">
                      <Button type="submit" variant="green">
                        Créer le parcours
                      </Button>
                    </Flex>
                  </Box>
                </Form>
              )}
            />
          </Box>
        )}
      </JourneyCreate>
    );
  }
}
