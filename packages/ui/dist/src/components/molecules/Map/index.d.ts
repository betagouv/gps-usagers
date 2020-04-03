import * as React from "react";
interface IState {
    value: string;
    suggestions: any;
    geoData: any;
}
export declare class MapComponent extends React.Component<any, IState> {
    state: IState;
    private mapRef;
    private geoRef;
    componentDidMount: () => Promise<void>;
    onChange: (event: any, { newValue }: {
        newValue: any;
    }) => void;
    onSuggestionsFetchRequested: ({ value }: {
        value: any;
    }) => void;
    onSuggestionsClearRequested: () => void;
    onClick: (suggestion: any) => any;
    highlightFeature: (e: any) => {};
    resetHighlight: (e: any) => void;
    onClickMarker: (e: any) => void;
    onEachFeature: (feature: any, layer: any) => void;
    render(): JSX.Element;
}
export {};
