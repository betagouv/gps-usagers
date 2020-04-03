import { JourneyUpdate, UpdateJourneyInput } from "@gpsu/controller";
import { Field, FieldArray, Form, Formik, FormikActions } from "formik";
import * as React from "react";
import * as Icons from "react-icons/md";
import {
  SortableContainer,
  SortableElement,
  SortableHandle
} from "react-sortable-hoc";
import { Box, Button, Flex } from "rebass";
import styled from "styled-components";
import { ModalConsumer } from "../../../context/Modal";
import { InputField, SelectElement, Textarea } from "../../../design";
import { stripTypenames } from "../../../utils/stripTypenames";
import FinalPreview from "../Preview";

const StyledDraghandle = styled(Icons.MdDragHandle)`
  cursor: row-resize;
`;

const DragHandle = SortableHandle(() => <StyledDraghandle size="2rem" />);

const SortableItem = SortableElement((props: any) => {
  const {
    journey: { type },
    arrayHelpers,
    index
  } = props;
  return (
    <Flex my={2} key={`data-${index}`} width={1}>
      <Box py={5} px={2}>
        <DragHandle />
      </Box>
      <Box width={4 / 12}>
        <Field
          label="Ajouter"
          component={SelectElement}
          name={`data.${index}.type`}
          options={[
            { value: "title", label: "un titre" },
            {
              value: "description",
              label: "une description"
            },
            { value: "space", label: "un espace" },
            {
              value: "phone",
              label: "un numéro de téléphone"
            },
            { value: "link", label: "un lien" },
            { value: "button", label: "un bouton" },
            {
              value: "address",
              label: "une adresse"
            },
            { value: "map", label: "une carte" }
          ]}
        />
      </Box>
      <Box p={3} width={10 / 12}>
        {type === "title" && (
          <Field
            name={`data.${index}.value`}
            placeholder="Ajouter un titre"
            component={InputField}
          />
        )}
        {type === "phone" && (
          <Field
            name={`data.${index}.value`}
            placeholder="Ajouter un numéro de téléphone"
            component={InputField}
          />
        )}
        {type === "map" && (
          <Field
            name={`data.${index}.value`}
            placeholder="Ajouter l'URL du flux"
            component={InputField}
          />
        )}
        {type === "link" && (
          <>
            <Field
              name={`data.${index}.link`}
              placeholder="Ajouter le lien"
              component={InputField}
            />
            <Field
              name={`data.${index}.value`}
              placeholder="Ajouter le titre du lien"
              component={InputField}
            />
          </>
        )}
        {type === "button" && (
          <>
            <Field
              name={`data.${index}.link`}
              placeholder="Ajouter le lien"
              component={InputField}
            />
            <Field
              name={`data.${index}.value`}
              placeholder="Ajouter le titre du bouton"
              component={InputField}
            />
          </>
        )}
        {type === "address" && (
          <>
            <Field
              name={`data.${index}.value`}
              placeholder="Ajouter le nom de la structure"
              component={InputField}
            />
            <Field
              name={`data.${index}.address`}
              placeholder="Ajouter l'adresse"
              component={InputField}
            />
            <Flex width={1}>
              <Field
                name={`data.${index}.zip`}
                placeholder="Ajouter le code postal"
                component={InputField}
                width={1 / 3}
              />
              <Field
                name={`data.${index}.city`}
                placeholder="Ajouter la ville"
                component={InputField}
                width={2 / 3}
              />
            </Flex>
          </>
        )}
        {type === "description" && (
          <Field
            name={`data.${index}.value`}
            placeholder="Ajouter une description"
            component={Textarea}
          />
        )}
      </Box>
      <Box py={4}>
        <Button type="button" onClick={() => arrayHelpers.remove(index)}>
          {" "}
          X{" "}
        </Button>
      </Box>
    </Flex>
  );
});

const SortableContainerList = SortableContainer(
  ({ children }: { children: any }) => {
    return <Box>{children}</Box>;
  }
);

interface IProps {
  id: string;
  data: any;
  order: number;
}

export default class FinalUpdateForm extends React.Component<IProps, any> {
  public render() {
    const { id, data } = this.props;

    return (
      <JourneyUpdate>
        {({ updateJourney }) => (
          <Box p={5}>
            <Formik
              initialValues={{
                id,
                data
              }}
              onSubmit={async (
                values: any,
                { resetForm }: FormikActions<UpdateJourneyInput>
              ) => {
                await updateJourney({
                  variables: { input: stripTypenames(values, "__typename") }
                });
                resetForm();
              }}
              render={({ values }) => (
                <Form>
                  <Flex justifyContent="flex-end">
                    <ModalConsumer>
                      {({ showModal, hideModal }) => (
                        <Button
                          onClick={async e => {
                            e.preventDefault();
                            showModal(FinalPreview, {
                              data: values.data,
                              closeModal: hideModal
                            });
                          }}
                          variant="green"
                        >
                          Prévisualiser
                        </Button>
                      )}
                    </ModalConsumer>
                  </Flex>
                  <FieldArray
                    name="data"
                    render={arrayHelpers => (
                      <>
                        <SortableContainerList
                          // onSortEnd={data => this.onSortEnd({ ...data, orderJourneys })}
                          useDragHandle={true}
                        >
                          {values.data &&
                            values.data.map((journey: any, index: number) => (
                              <SortableItem
                                key={journey.id}
                                journey={journey}
                                arrayHelpers={arrayHelpers}
                                index={index}
                              />
                            ))}
                        </SortableContainerList>

                        <Flex justifyContent="space-between" width={1}>
                          <Button
                            type="button"
                            onClick={() =>
                              arrayHelpers.push({ type: "", value: "" })
                            }
                            my={3}
                          >
                            Ajouter un contenu
                          </Button>
                          <Button type="submit" variant="green" my={3}>
                            Enregistrer l'écran final
                          </Button>
                        </Flex>
                      </>
                    )}
                  />
                </Form>
              )}
            />
          </Box>
        )}
      </JourneyUpdate>
    );
  }
}
