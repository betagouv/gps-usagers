import * as React from "react";
import { ReadJourneyQuery_readJourney } from "../../../schemaTypes";
export declare const readJourneyQuery: any;
export interface WithReadJourney {
    readJourney: ReadJourneyQuery_readJourney | null;
    loading: boolean;
}
interface Props {
    journeyId: string;
    children: (data: WithReadJourney) => JSX.Element | null;
}
export declare class ReadJourney extends React.PureComponent<Props> {
    render(): JSX.Element;
}
export {};
