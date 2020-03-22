export interface Result {
    result: boolean;
}
export interface Data {
    data: number;
}
export interface Success {
    success: boolean;
}
export interface BlockName {
    blockName: string;
}
export interface Count {
    count: number;
}
export declare type CommandResult = Result | Data | Success | BlockName;
