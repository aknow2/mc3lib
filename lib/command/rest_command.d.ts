export declare type SendCommand<T> = (command: string, query: {}) => Promise<T | ErrorMsg>;
export interface ErrorMsg {
    errorCode: number;
    errorMessage: string;
}
declare const createSendCommand: <T>(url: string) => SendCommand<T>;
export default createSendCommand;
