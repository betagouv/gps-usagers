import { FindRootJourneys } from "@gpsu/controller";
import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Box, Button, Flex, Heading } from "rebass";
import Layout from "../../components/Layout";
import { ModalConsumer } from "../../context/Modal";
import JourneyCreateForm from "./Create";
import JourneyFind from "./Find";

export const Journeys: React.FunctionComponent<
  RouteComponentProps<{}>
> = () => {
  return (
    <Layout>
      <Flex justifyContent="space-between">
        <Heading mb={5} fontSize={9}>
          GESTION DES PARCOURS
        </Heading>
        <Flex>
          <Box>
            <ModalConsumer>
              {({ showModal, hideModal }) => (
                <Button
                  onClick={async e => {
                    e.preventDefault();
                    showModal(JourneyCreateForm, {
                      closeModal: hideModal
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
      </Flex>
      <FindRootJourneys parentJourneyId="">
        {({ findRootJourneys }) =>
          findRootJourneys && <JourneyFind findJourneys={findRootJourneys} />
        }
      </FindRootJourneys>
    </Layout>
  );
};
