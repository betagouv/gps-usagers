import * as React from "react";
import { MdClear } from "react-icons/md";
import * as ReactModal from "react-modal";
import { Box, BoxProps } from "rebass";
import styled from "styled-components";

const StyledClose = styled.div`
  cursor: pointer;
  text-align: right;
  position: fixed;
  right: 2rem;
  top: 2rem;
`;

const StyledContainer = styled(Box)<BoxProps>`
  display: inline-block;
`;

const StyledLink = styled.div`
  cursor: pointer;
`;

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: "1500"
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1500",
    borderRadius: "0.8rem",
    overflow: "unset",
    padding: "0"
  }
};

interface IProps extends BoxProps {
  component: React.ReactNode;
}

interface IState {
  isOpen: boolean;
}

export class Modal extends React.Component<IProps, IState> {
  state = {
    isOpen: false
  };

  toggle = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const { isOpen } = this.state;
    this.setState(() => ({ isOpen: !isOpen }));
  };

  closeModal = () => {
    this.setState(() => ({ isOpen: false }));
  };

  public render() {
    const { isOpen } = this.state;
    const { children, component } = this.props;

    return (
      <StyledContainer>
        <StyledLink onClick={this.toggle}>{children}</StyledLink>
        <ReactModal
          style={customStyles}
          isOpen={isOpen}
          onRequestClose={this.closeModal}
          ariaHideApp={false}
        >
          <>
            <StyledClose onClick={this.closeModal}>
              <MdClear size="2.4rem" />
            </StyledClose>
          </>
          {component}
        </ReactModal>
      </StyledContainer>
    );
  }
}
