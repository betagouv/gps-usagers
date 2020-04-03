import { ForgotPasswordChangeMutationVariables } from "../../schemaTypes";
import { NormalizedErrorMap } from "../../types/NormalizedErrorMap";
interface Props {
    children: (data: {
        submit: (values: ForgotPasswordChangeMutationVariables) => Promise<NormalizedErrorMap | null>;
    }) => JSX.Element | null;
}
export declare const ChangePasswordController: import("react").ComponentClass<Props, any>;
export {};
