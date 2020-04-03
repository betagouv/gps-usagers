import { FieldProps } from "formik";
import * as React from "react";
interface IProps extends FieldProps {
    label?: string;
    placeholder?: string;
    information?: string;
    caution?: string;
    isMulti?: boolean;
    defaultValue?: {
        value: string | boolean;
        label: string;
    };
    options?: [{
        value: string | boolean;
        label: string;
    }];
    isSmall?: boolean;
    isDisabled?: boolean;
    flexDirection?: string;
    onChange?: (data: object) => void;
}
export declare class SelectElement extends React.Component<IProps, any> {
    handleChange: (data: any) => void;
    handleBlur: () => void;
    render(): JSX.Element;
}
export {};
