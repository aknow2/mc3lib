import { Exec } from '../command/executor';
declare type ConnectedStatus = 'connected' | 'disconnected';
export declare type OnChangeConnectedStatus = (st: ConnectedStatus) => void;
export declare const listenConnected: (exec: Exec<void | {}>, onChangeConnectedStatus?: OnChangeConnectedStatus) => () => void;
export {};
