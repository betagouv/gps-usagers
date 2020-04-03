import * as React from "react";
import { BoxProps } from "rebass";
interface IProps extends BoxProps {
    onClose: () => void;
    isOpen: boolean;
}
interface IState {
    isOpen: boolean;
}
export declare class ModalExternal extends React.Component<IProps, IState> {
    state: IState;
    closeModal: () => void;
    render(): JSX.Element;
}
export {};
