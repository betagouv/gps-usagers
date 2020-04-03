import * as React from "react";
import { FindDescendantJourneysQuery_findDescendantJourneys } from "../../../schemaTypes";
export declare const findDescendantJourneysQuery: any;
export interface WithFindDescendantJourneys {
    findDescendantJourneys: FindDescendantJourneysQuery_findDescendantJourneys | null;
    loading: boolean;
}
interface Props {
    parentJourneyId: string | null;
    children: (data: WithFindDescendantJourneys) => JSX.Element | null;
}
export declare class FindDescendantJourneys extends React.PureComponent<Props> {
    render(): JSX.Element;
}
export {};
