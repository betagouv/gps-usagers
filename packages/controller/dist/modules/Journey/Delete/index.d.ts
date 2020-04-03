import * as React from "react";
import { MutationFn } from "react-apollo";
import { DeleteJourneyMutation, DeleteJourneyMutationVariables } from "../../../schemaTypes";
export declare const deleteJourneyMutation: any;
export interface WithDeleteJourney {
    deleteJourney: MutationFn<DeleteJourneyMutation, DeleteJourneyMutationVariables>;
}
interface Props {
    children: (data: WithDeleteJourney) => JSX.Element | null;
}
export declare class JourneyDelete extends React.PureComponent<Props> {
    render(): JSX.Element;
}
export {};
