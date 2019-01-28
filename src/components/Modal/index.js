import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";
import "./Styles.css";

class Modal extends Component {
  state = {
    showModal: false
  };

  static open = e => {
    e.preventDefault();
    this.showModal();
  };

  static close = e => {
    e.preventDefault();
    this.hideModal();
  };

  handleClickOutside = evt => {
    this.hideModal();
  };

  showModal = () => {
    this.setState(() => ({
      showModal: true
    }));
  };

  hideModal = () => {
    this.setState(() => ({
      showModal: false
    }));
  };

  render() {
    const { children } = this.props;

    return (
      <div
        style={{ display: +this.state.showModal ? "" : "none" }}
        className="modal"
      >
        <div onClick={this.hideModal} className="modalClose">
          X
        </div>
        <div className="modalContent">{children}</div>
      </div>
    );
  }
}

export default onClickOutside(Modal);
