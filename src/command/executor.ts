import { createQueryStrings, createPositionStr } from '../util';

export type Exec<T> = (command: string, query: {}) => Promise<T | ErrorMsg>;

export interface ErrorMsg {
  errorCode: number;
  errorMessage: string;
}

export class Position {
  public readonly str: string;

  constructor(position: number[], isRelative: boolean = false) {
    this.str = createPositionStr(position, isRelative);
  }
}

const createExecutor = <T>(url: string): Exec<T> => async (
  command: string,
  query: {}
) => {
  const querystrings = createQueryStrings(query);
  const response = await fetch(`${url}/${command}?${querystrings}`);
  const msg = await response.json();
  if (response.status !== 200) {
    return Promise.reject(msg);
  }
  return Promise.resolve(msg);
};

export default createExecutor;
