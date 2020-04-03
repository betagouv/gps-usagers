import { JourneyDelete } from "@gpsu/controller";
import * as React from "react";
import { Button, Flex, Text } from "rebass";

interface IProps {
  id: string;
  name: string;
  closeModal: () => void;
}

export default class JourneyDeleteForm extends React.Component<IProps, any> {
  public render() {
    const { closeModal, id, name } = this.props;
    return (
      <JourneyDelete>
        {({ deleteJourney }) => (
          <Flex flexDirection="column" alignItems="center" width="60rem" p={5}>
            <Text fontSize={7} textAlign="center">
              Êes-vous sûre de vouloir supprimer le parcours <br /> {name}
            </Text>
            <Flex mt={4}>
              <Button
                m={2}
                variant="green"
                onClick={async () => {
                  await deleteJourney({
                    variables: { journeyId: id }
                  });
                  closeModal();
                }}
              >
                Confirmer
              </Button>
              <Button m={2} variant="primary" onClick={closeModal}>
                Annuler
              </Button>
            </Flex>
          </Flex>
        )}
      </JourneyDelete>
    );
  }
}
