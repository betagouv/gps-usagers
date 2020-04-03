import * as React from "react";
import * as Icons from "react-icons/md";
import { Box, Flex, FlexProps, Text } from "rebass";
import styled from "styled-components";
import { ModalConsumer } from "../../../context/Modal";
import FinalCreateForm from "../../final/Create";
import JourneyCreateForm from "../Create";

const BoxSelected = styled(Flex)<FlexProps>`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 35rem;
  margin: 2%;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  text-align: center;
  font-size: 1.6em;
  &:hover {
    background: #f3f2f6;
  }
`;

export default function JourneySelection({ parent }: { parent: string }) {
  return (
    <Flex>
      <ModalConsumer>
        {({ showModal, hideModal }) => (
          <BoxSelected>
            <div
              onClick={async e => {
                e.preventDefault();
                showModal(JourneyCreateForm, {
                  closeModal: hideModal,
                  parent
                });
              }}
            >
              <Box>
                <Icons.MdList size={75} />
                <Text textAlign="center">Créer un nouveau parcours</Text>
              </Box>
            </div>
          </BoxSelected>
        )}
      </ModalConsumer>
      <ModalConsumer>
        {({ showModal, hideModal }) => (
          <BoxSelected>
            <div
              onClick={async e => {
                e.preventDefault();
                showModal(FinalCreateForm, {
                  closeModal: hideModal,
                  parent
                });
              }}
            >
              <Box>
                <Icons.MdDesktopMac size={75} />
                <Text textAlign="center">Créer un écran final</Text>
              </Box>
            </div>
          </BoxSelected>
        )}
      </ModalConsumer>
    </Flex>
  );
}
