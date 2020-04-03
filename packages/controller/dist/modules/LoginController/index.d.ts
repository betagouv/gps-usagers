import { LoginMutationVariables } from "../../schemaTypes";
import { NormalizedErrorMap } from "../../types/NormalizedErrorMap";
interface Props {
    onSessionId?: (sessionId: string) => void;
    children: (data: {
        submit: (values: LoginMutationVariables) => Promise<NormalizedErrorMap | null>;
    }) => JSX.Element | null;
}
export declare const LoginController: import("react").ComponentClass<Props, any>;
export {};
