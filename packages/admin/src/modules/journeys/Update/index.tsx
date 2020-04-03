import { JourneyUpdate, UpdateJourneyInput } from "@gpsu/controller";
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
  id: string;
  name: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  order: number;
  isActive: boolean;
  closeModal: () => void;
}

export default class JourneyUpdateForm extends React.Component<IProps, any> {
  public render() {
    const {
      closeModal,
      id,
      name,
      title,
      description,
      icon,
      color,
      isActive
    } = this.props;
    return (
      <JourneyUpdate>
        {({ updateJourney }) => (
          <Box width="60rem" p={5}>
            <Formik
              initialValues={{
                id,
                name,
                title,
                description,
                icon,
                color,
                isActive
              }}
              onSubmit={async (
                values: UpdateJourneyInput,
                { resetForm }: FormikActions<UpdateJourneyInput>
              ) => {
                await updateJourney({
                  variables: { input: values }
                });
                resetForm();
                closeModal();
              }}
              render={(
                formikBag: FormikProps<{
                  id: string;
                  name: string;
                  title: string;
                  description: string;
                  icon: string;
                  color: string;
                  isActive: boolean;
                }>
              ) => (
                <Form>
                  <Box p={4}>
                    <Heading fontSize={9}>Modifier le parcours</Heading>
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
                        checked={isActive}
                      />
                    </Box>
                    <Box my={4}>
                      <Field
                        label="Icon"
                        name="icon"
                        component={SelectElement}
                        defaultValue={icon}
                        options={Object.keys(Icons).map(iconName => {
                          const Icon = Icons[iconName];
                          return {
                            value: iconName,
                            label: (
                              <Flex key={iconName}>
                                <Icon size="2rem" />
                                <Text ml={3}>{iconName}</Text>
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
                        defaultValue={color}
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
                        Enregistrer
                      </Button>
                    </Flex>
                  </Box>
                </Form>
              )}
            />
          </Box>
        )}
      </JourneyUpdate>
    );
  }
}
