import { Direction, TurnDirection, Items } from '../constants';
import { Exec, ErrorMsg } from '../command/executor';
import { Success, Result, BlockName, Data } from '../command/result';
export declare type MoveCommand = (dir: Direction) => Promise<Success | ErrorMsg>;
export declare const createMoveCommand: (Exec: Exec<Success>) => MoveCommand;
export declare type TurnCommand = (dir: TurnDirection) => Promise<Success | ErrorMsg>;
export declare const createTurnCommand: (Exec: Exec<Success>) => TurnCommand;
export declare type PlaceCommand = (slotNum: number, direction: Direction) => Promise<Success | ErrorMsg>;
export declare const createPlaceCommand: (Exec: Exec<Success>) => PlaceCommand;
export declare type TillCommand = (direction: Direction) => Promise<Success | ErrorMsg>;
export declare const createTillCommand: (Exec: Exec<Success>) => TillCommand;
export declare type AttackCommand = (direction: Direction) => Promise<Success | ErrorMsg>;
export declare const createAttack: (Exec: Exec<Success>) => AttackCommand;
export declare type CollectCommand = (item: Items) => Promise<Success | ErrorMsg>;
export declare const createCollect: (Exec: Exec<Success>) => CollectCommand;
export declare type DropCommand = (slotNum: number, quantity: number, direction: Direction) => Promise<Success | ErrorMsg>;
export declare const createDrop: (Exec: Exec<Success>) => DropCommand;
export declare type DropAllCommand = (direction: Direction) => Promise<Success | ErrorMsg>;
export declare const createDropAll: (Exec: Exec<Success>) => DropAllCommand;
export declare type DetectCommand = (direction: Direction) => Promise<Result | ErrorMsg>;
export declare const createDetect: (Exec: Exec<Result>) => DetectCommand;
export declare type InspectCommand = (direction: Direction) => Promise<BlockName | ErrorMsg>;
export declare const createInspect: (Exec: Exec<BlockName>) => InspectCommand;
export declare type InspectDataCommand = (direction: Direction) => Promise<Data | ErrorMsg>;
export declare const createInspectData: (Exec: Exec<Data>) => InspectDataCommand;
export declare type DetectRedStoneCommand = (direction: Direction) => Promise<Result | ErrorMsg>;
export declare const createDetectRedStone: (Exec: Exec<Result>) => DetectRedStoneCommand;
export declare type GetItemDetailCommand = (slotNum: number) => Promise<Result | ErrorMsg>;
export declare const createGetItemDetail: (Exec: Exec<Result>) => GetItemDetailCommand;
export declare type GetItemSpaceCommand = (slotNum: number) => Promise<Result | ErrorMsg>;
export declare const createGetItemSpace: (Exec: Exec<Result>) => GetItemSpaceCommand;
export declare type TransferCommand = (srcslotNum: number, quantity: number, dstslotNum: number) => Promise<Result | ErrorMsg>;
export declare const createTransfer: (Exec: Exec<Result>) => TransferCommand;
export declare type TpToPlayerCommand = () => void;
export declare const createTpToPlayer: (Exec: Exec<void>) => TpToPlayerCommand;
