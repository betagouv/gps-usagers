import * as React from "react";
import { BoxProps } from "rebass";
interface IProps extends BoxProps {
    checked: boolean;
    handleChange: any;
}
interface IState {
    isChecked: boolean;
}
export declare class Switch extends React.Component<IProps, IState> {
    state: IState;
    handleClick: () => void;
    render(): JSX.Element;
}
export {};
