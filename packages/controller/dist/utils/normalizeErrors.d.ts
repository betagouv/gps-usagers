interface Error {
    path: string;
    message: string;
}
export declare const normalizeErrors: (errors: Error[]) => {
    [key: string]: string;
};
export {};
