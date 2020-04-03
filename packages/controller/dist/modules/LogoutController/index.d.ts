import * as React from "react";
interface Props {
    children: (data: {
        logout: () => void;
    }) => JSX.Element | null;
}
export declare const LogoutController: React.SFC<Props>;
export {};
