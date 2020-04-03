import { CreateJourneyInput, JourneyCreate } from "@gpsu/controller";
import { Field, Form, Formik, FormikActions, FormikProps } from "formik";
import * as React from "react";
import * as Icons from "react-icons/md";
import { Box, Button, Flex, Heading, Text } from "rebass";
import {
  InputField,
  SelectElement,
  SwitchElement,
  Textarea
} from "../../../design";

interface IProps {
  parent: string | null;
  closeModal: () => void;
}

export default class JourneyCreateForm extends React.Component<IProps, any> {
  public render() {
    const { closeModal, parent } = this.props;
    return (
      <JourneyCreate>
        {({ createJourney }) => (
          <Box width="60rem" p={5}>
            <Formik
              initialValues={{
                name: "",
                parent,
                type: "journey",
                color: "blue",
                isActive: true
              }}
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
                    <Heading fontSize={9}>Créer un nouveau parcours</Heading>
                    <Box my={4}>
                      <Field
                        label="Nom du parcours"
                        name="name"
                        component={InputField}
                      />
                    </Box>
                    <Box my={4}>
                      <Field
                        label="Actif"
                        name="isActive"
                        component={SwitchElement}
                      />
                    </Box>
                    <Box my={4}>
                      <Field
                        label="Icon"
                        name="icon"
                        component={SelectElement}
                        options={Object.keys(Icons).map(name => {
                          const Icon = Icons[name];
                          return {
                            value: name,
                            label: (
                              <Flex key={name}>
                                <Icon size="2rem" />
                                <Text ml={3}>{name}</Text>
                              </Flex>
                            )
                          };
                        })}
                      />
                    </Box>
                    <Box my={4}>
                      <Field
                        label="Couleur"
                        name="color"
                        component={SelectElement}
                        options={[
                          { value: "blue", label: "Bleu" },
                          { value: "gray", label: "Gris" },
                          { value: "green", label: "Vert" },
                          { value: "red", label: "Rouge" }
                        ]}
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
