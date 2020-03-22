export declare type Exec<T> = (command: string, query: {}) => Promise<T | ErrorMsg>;
export interface ErrorMsg {
    errorCode: number;
    errorMessage: string;
}
export declare class Position {
    readonly str: string;
    constructor(position: number[], isRelative?: boolean);
}
declare const createExecutor: <T>(url: string) => Exec<T>;
export default createExecutor;
