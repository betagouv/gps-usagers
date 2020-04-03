import * as React from "react";
import { MutationFn } from "react-apollo";
import { CreateJourneyMutation, CreateJourneyMutationVariables } from "../../../schemaTypes";
export declare const createJourneyMutation: any;
export interface WithCreateJourney {
    createJourney: MutationFn<CreateJourneyMutation, CreateJourneyMutationVariables>;
}
interface Props {
    children: (data: WithCreateJourney) => JSX.Element | null;
}
export declare class JourneyCreate extends React.PureComponent<Props> {
    render(): JSX.Element;
}
export {};
