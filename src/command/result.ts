import { Items } from '../constants';

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

export interface Fill {
  fillCount: number;
  blockName: string | Items;
}

export interface CompareCount {
  compareCount: number;
}

export type CommandResult =
  | Result
  | Data
  | Success
  | BlockName
  | Count
  | Fill
  | CompareCount;
