import { Items } from '../constants';
import { Exec, Position } from '../command/executor';
import { Count } from '../command/result';
export declare const createSetBlockCommand: (sendCommand: Exec<void>) => (position: Position, tileName: Items, tileData?: number) => Promise<void | import("../command/executor").ErrorMsg>;
export declare const createClone: (sendCommand: Exec<Count>) => (begin: Position, end: Position, destination: Position, maskMode?: string, cloneMode?: string, tileName?: string, tileData?: number) => Promise<import("../command/executor").ErrorMsg | Count>;
export declare const createSummon: (sendCommand: Exec<Count>) => (spawnPos: Position, entityType: string) => Promise<import("../command/executor").ErrorMsg | Count>;
