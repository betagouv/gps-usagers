import { FieldProps } from "formik";
import * as React from "react";
export declare const StyledContainer: import("styled-components").StyledComponent<import("react").FunctionComponent<import("rebass").FlexProps>, import("../../../theme").ITheme, {}, never>;
export declare const StyledCross: import("styled-components").StyledComponent<"div", import("../../../theme").ITheme, {}, never>;
export declare const InputField: React.SFC<FieldProps<any> & {
    prefix: React.ReactNode;
    label?: string;
    type?: string;
    information?: string;
    caution?: string;
    flexDirection?: string;
    placeholder?: string;
    autocomplete?: string;
    isSmall?: boolean;
    isDisabled?: boolean;
}>;
