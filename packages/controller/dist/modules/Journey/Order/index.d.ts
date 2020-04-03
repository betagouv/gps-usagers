import * as React from "react";
import { MutationFn } from "react-apollo";
import { OrderJourneysMutation, OrderJourneysMutationVariables } from "../../../schemaTypes";
export declare const orderJourneysMutation: any;
export interface WithOrderJourneys {
    orderJourneys: MutationFn<OrderJourneysMutation, OrderJourneysMutationVariables>;
}
interface Props {
    children: (data: WithOrderJourneys) => JSX.Element | null;
}
export declare class OrderJourneys extends React.PureComponent<Props> {
    render(): JSX.Element;
}
export {};
