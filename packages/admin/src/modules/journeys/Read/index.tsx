import {
  FindDescendantJourneys,
  JourneyUpdate,
  UpdateJourneyInput
} from "@gpsu/controller";
import { Field, Form, Formik, FormikActions, FormikProps } from "formik";
import * as React from "react";
import * as Icons from "react-icons/md";
import { NavLink, RouteComponentProps } from "react-router-dom";
import { Box, BoxProps, Button, Flex, Heading } from "rebass";
import styled from "styled-components";
import Layout from "../../../components/Layout";
import { ModalConsumer } from "../../../context/Modal";
import { ButtonForm, InputField, SelectElement } from "../../../design";
// import FinalUpdateForm from "../../final/Update";
import JourneyCreateForm from "../Create";
import JourneyFind from "../Find";
import JourneySelection from "../Selection";

const StyledJourney = styled(Box)<BoxProps>`
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-left: 3px solid #48b95f;
  border-radius: 0.4rem;
  padding-left: 0.8rem;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
`;

export const JourneysExplorer: React.FunctionComponent<
  RouteComponentProps<{ journeyId: string }>
> = ({
  match: {
    params: { journeyId }
  }
}) => {
  return (
    <Layout>
      <FindDescendantJourneys parentJourneyId={journeyId}>
        {({ findDescendantJourneys, loading }) => {
          if (!findDescendantJourneys || loading) {
            return <></>;
          }
          const {
            id,
            name,
            title,
            type,
            children,
            parent
          } = findDescendantJourneys;
          console.log(
            "WOONIES LOG: findDescendantJourneys",
            findDescendantJourneys
          );

          return (
            <>
              <Flex mb={4} justifyContent="space-between">
                <Flex alignItems="center">
                  <NavLink to={parent ? `/journeys/${parent.id}` : `/journeys`}>
                    <Icons.MdArrowBack size={25} />
                  </NavLink>
                  <Heading ml={3} fontSize={9}>
                    PARCOURS : {name}
                  </Heading>
                </Flex>
                {children && children.length > 0 && (
                  <Flex>
                    <Box mx={2}>
                      <ModalConsumer>
                        {({ showModal, hideModal }) => (
                          <Button
                            onClick={async e => {
                              e.preventDefault();
                              showModal(JourneyCreateForm, {
                                closeModal: hideModal
                              });
                            }}
                            variant="blue"
                          >
                            AJOUTER INFO SPECIALE
                          </Button>
                        )}
                      </ModalConsumer>
                    </Box>
                    <Box>
                      <ModalConsumer>
                        {({ showModal, hideModal }) => (
                          <Button
                            onClick={async e => {
                              e.preventDefault();
                              showModal(JourneyCreateForm, {
                                closeModal: hideModal,
                                parent: id
                              });
                            }}
                            variant="green"
                          >
                            Créer un nouveau parcours
                          </Button>
                        )}
                      </ModalConsumer>
                    </Box>
                  </Flex>
                )}
              </Flex>

              {(children && children.length > 0 && (
                <>
                  <JourneyUpdate>
                    {({ updateJourney }) => (
                      <StyledJourney bg="gray" mb={6}>
                        <Formik
                          initialValues={{ id, title, type }}
                          onSubmit={async (
                            values: UpdateJourneyInput,
                            { resetForm }: FormikActions<UpdateJourneyInput>
                          ) => {
                            await updateJourney({
                              variables: { input: values }
                            });
                            resetForm();
                          }}
                          render={(
                            formikBag: FormikProps<{
                              id: string;
                              title: string;
                              type: string;
                            }>
                          ) => (
                            <Form>
                              <Flex
                                justifyContent="space-between"
                                alignItems="flex-end"
                                width={1}
                              >
                                <Box p={2} width={6 / 12}>
                                  <Field
                                    label="Titre de la page"
                                    name="title"
                                    component={InputField}
                                  />
                                </Box>
                                <Box p={2} width={3 / 12}>
                                  <Field
                                    label="Type de liste"
                                    name="type"
                                    component={SelectElement}
                                    options={[
                                      {
                                        value: "journey",
                                        label: "Liste"
                                      },
                                      { value: "choice", label: "Choix" }
                                    ]}
                                  />
                                </Box>
                                <Flex p={2} width={3 / 12}>
                                  <ButtonForm type="submit" variant="green">
                                    Enregistrer
                                  </ButtonForm>
                                </Flex>
                              </Flex>
                            </Form>
                          )}
                        />
                      </StyledJourney>
                    )}
                  </JourneyUpdate>
                  <JourneyFind findJourneys={children} />
                </>
              )) || <JourneySelection parent={id} />}
            </>

            // <Flex flexDirection="column" justifyContent="space-between">
            //   <FindDescendantJourneys parentJourneyId={id}>
            //   {({ findDescendantJourneys }) => {
            //     if (!findDescendantJourneys) {
            //       return <></>;
            //     }

            //       // const childrenJourneys = findDescendantJourneys.filter(
            //       //   journey => journey.id !== id
            //       // );

            //       const childrenJourneys = [];

            //       if (
            //         childrenJourneys.length > 0 &&
            //         childrenJourneys[0].type !== "final"
            //       ) {
            //         return (

            //         );
            //       } else {
            //         return (
            //           <>
            //             <Flex alignItems="center">
            //               <NavLink to={`/journeys`}>
            //                 <Icons.MdArrowBack size={25} />
            //               </NavLink>
            //               <Heading ml={3} fontSize={9}>
            //                 PARCOURS : {name}
            //               </Heading>
            //             </Flex>
            //             {(childrenJourneys[0] &&
            //               childrenJourneys[0].type === "final" && (
            //                 <FinalUpdateForm {...childrenJourneys[0]} />
            //               )) || <JourneySelection parent={journeyId} />}
            //           </>
            //         );
            //       }
            //     }}
            //   </FindDescendantJourneys>
            // </Flex>
          );
        }}
      </FindDescendantJourneys>
    </Layout>
  );
};
