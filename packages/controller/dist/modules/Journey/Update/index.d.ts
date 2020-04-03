import * as React from "react";
import { MutationFn } from "react-apollo";
import { UpdateJourneyMutation, UpdateJourneyMutationVariables } from "../../../schemaTypes";
export declare const updateJourneyMutation: any;
export interface WithUpdateJourney {
    updateJourney: MutationFn<UpdateJourneyMutation, UpdateJourneyMutationVariables>;
}
interface Props {
    children: (data: WithUpdateJourney) => JSX.Element | null;
}
export declare class JourneyUpdate extends React.PureComponent<Props> {
    render(): JSX.Element;
}
export {};
