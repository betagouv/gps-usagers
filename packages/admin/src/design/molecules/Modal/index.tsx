import * as React from "react";
import { MdClose } from "react-icons/md";
import * as ReactModal from "react-modal";
import { BoxProps } from "rebass";
import styled from "../../../theme/styled-components";

const StyledClose = styled.div`
  cursor: pointer;
  text-align: right;
  position: fixed;
  right: 2rem;
`;

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: "2100"
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
    background: "white",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "16% 2%"
  }
};

interface IProps extends BoxProps {
  onClose: () => void;
  isOpen: boolean;
}

interface IState {
  isOpen: boolean;
}

export class ModalExternal extends React.Component<IProps, IState> {
  state: IState = {
    isOpen: this.props.isOpen || false
  };

  closeModal = () => {
    const { onClose } = this.props;
    this.setState(() => ({ isOpen: false }));
    onClose();
  };

  public render() {
    const { isOpen } = this.state;
    const { children } = this.props;

    return (
      <ReactModal
        style={customStyles}
        isOpen={isOpen}
        onRequestClose={this.closeModal}
        ariaHideApp={false}
      >
        <>
          <StyledClose onClick={this.closeModal}>
            <MdClose size={25} />
          </StyledClose>
        </>
        {children}
      </ReactModal>
    );
  }
}
