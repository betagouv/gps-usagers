import * as React from "react";
import { FindRootJourneysQuery_findRootJourneys } from "../../../schemaTypes";
export declare const findRootJourneysQuery: any;
export interface WithFindRootJourneys {
    findRootJourneys: FindRootJourneysQuery_findRootJourneys[] | null;
    loading: boolean;
}
interface Props {
    children: (data: WithFindRootJourneys) => JSX.Element | null;
}
export declare class FindRootJourneys extends React.PureComponent<Props> {
    render(): JSX.Element;
}
export {};
