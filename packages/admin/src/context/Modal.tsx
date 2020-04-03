import * as React from "react";
import { ModalExternal } from "../design";

interface ModalContextInterface {
  component: React.ComponentClass | React.FunctionComponent | null;
  props: any;
  showModal: (
    component: React.ComponentClass | React.FunctionComponent,
    props?: {}
  ) => void;
  hideModal: () => void;
}

const ModalContext = React.createContext<ModalContextInterface>({
  component: null,
  props: {},
  showModal: () => ({}),
  hideModal: () => ({})
});

export class ModalProvider extends React.Component<any, ModalContextInterface> {
  showModal = (
    component: React.ComponentClass | React.FunctionComponent,
    props = {}
  ) => {
    this.setState({
      component,
      props
    });
  };

  hideModal = () => {
    this.setState({
      component: null,
      props: {}
    });
  };

  /* tslint:disable */
  state: ModalContextInterface = {
    component: null,
    props: {},
    showModal: this.showModal,
    hideModal: this.hideModal
  };

  public render() {
    const { component: Component, props, hideModal } = this.state;
    return (
      <ModalContext.Provider value={this.state}>
        {this.props.children}
        {Component ? (
          <ModalExternal isOpen={true} onClose={hideModal}>
            <Component {...props} />
          </ModalExternal>
        ) : (
          ""
        )}
      </ModalContext.Provider>
    );
  }
}

export const ModalConsumer = ModalContext.Consumer;
