import {
  // FindRootJourneysQuery_findRootJourneys,
  // FindDescendantJourneysQuery_findDescendantJourneys,
  OrderJourneys
} from "@gpsu/controller";
import arrayMove from "array-move";
import * as React from "react";
import * as Icons from "react-icons/md";
import { NavLink } from "react-router-dom";
import {
  SortableContainer,
  SortableElement,
  SortableHandle
} from "react-sortable-hoc";
import { Box, Button, Flex, FlexProps, Text } from "rebass";
import styled from "styled-components";
import { ModalConsumer } from "../../../context/Modal";
import { Badge } from "../../../design";
import JourneyDeleteForm from "../Delete";
import JourneyUpdateForm from "../Update";

const StyledItems = styled(Flex)<FlexProps>`
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-left: 3px solid #e73f57;
  border-radius: 0.4rem;
`;

const StyledDraghandle = styled(Icons.MdDragHandle)`
  cursor: row-resize;
`;

const DragHandle = SortableHandle(() => <StyledDraghandle size="2rem" />);

const SortableItem = SortableElement(
  (journey: any) => {
    const { name, icon, id, isActive } = journey;
    const Icon = icon ? Icons[icon] : null;
    return (
      <StyledItems
        p={4}
        my={3}
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex alignItems="center">
          <DragHandle />
          <Box ml={3}>{Icon && <Icon size={25} />}</Box>
          <Text ml={2} fontSize={5} fontWeight="bold">
            {name}
          </Text>
        </Flex>

        <Flex alignItems="center">
          <Badge variant={isActive ? "green" : "red"}>Active</Badge>
          <ModalConsumer>
            {({ showModal, hideModal }) => (
              <Button
                onClick={async e => {
                  e.preventDefault();
                  showModal(JourneyUpdateForm, {
                    ...journey,
                    closeModal: hideModal
                  });
                }}
                variant="white"
              >
                <Flex alignItems="center">
                  <Icons.MdEdit size={20} />
                  <Text mx={2}>Modifier</Text>
                </Flex>
              </Button>
            )}
          </ModalConsumer>
          <NavLink to={`/journeys/${id}`}>
            <Button variant="white">
              <Flex alignItems="center">
                <Icons.MdVisibility size={20} />
                <Text mx={2}>Explorer</Text>
              </Flex>
            </Button>
          </NavLink>
          <ModalConsumer>
            {({ showModal, hideModal }) => (
              <Button
                onClick={async e => {
                  e.preventDefault();
                  showModal(JourneyDeleteForm, {
                    ...journey,
                    closeModal: hideModal
                  });
                }}
                variant="white"
              >
                <Flex alignItems="center">
                  <Icons.MdDelete size={20} />
                </Flex>
              </Button>
            )}
          </ModalConsumer>
        </Flex>
      </StyledItems>
    );
  }
);

const SortableContainerList = SortableContainer(
  ({ children }: { children: any }) => {
    return <Box>{children}</Box>;
  }
);

interface IProps {
  findJourneys: any;
}

interface IState {
  items: any;
}

export default class JourneysFind extends React.Component<IProps, IState> {
  state: IState = {
    items: this.props.findJourneys
  };

  componentWillReceiveProps = (nextProps: any) => {
    if (nextProps.findJourneys !== this.state.items) {
      this.setState({ items: nextProps.findJourneys });
    }
  };

  onSortEnd = ({
    oldIndex,
    newIndex,
    orderJourneys
  }: {
    oldIndex: number;
    newIndex: number;
    orderJourneys: any;
  }) => {
    this.setState(
      ({ items }: { items: any }) => ({
        items: arrayMove(items, oldIndex, newIndex)
      }),
      () => {
        orderJourneys({
          variables: {
            input:
              this.state.items &&
              this.state.items.map(({ id }:{id:any}, index:any) => ({
                id,
                order: ++index
              }))
          }
        });
      }
    );
  };

  render() {
    const { items } = this.state;

    return (
      <OrderJourneys>
        {({ orderJourneys }) => (
          <SortableContainerList
            onSortEnd={data => this.onSortEnd({ ...data, orderJourneys })}
            useDragHandle={true}
          >
            {items &&
              items.map((journey:any, index:number) => (
                <SortableItem key={journey.id} {...journey} index={index} />
              ))}
          </SortableContainerList>
        )}
      </OrderJourneys>
    );
  }
}
