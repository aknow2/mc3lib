export declare const createQueryStrings: (query: {}) => string;
export declare const createPositionStr: (position: number[], isRelative: boolean) => string;
interface endpoints {
    http: string;
    ws: string;
}
export declare const formatUrl: (connect: string) => endpoints;
export {};
