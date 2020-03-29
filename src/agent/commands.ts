import { Direction, TurnDirection, Items } from '../constants';
import { Exec, ErrorMsg } from '../command/executor';
import { Success, Result, BlockName, Data } from '../command/result';

export type MoveCommand = (dir: Direction) => Promise<Success | ErrorMsg>;
export const createMoveCommand = (Exec: Exec<Success>): MoveCommand => (
  direction: Direction
) => Exec('move', { direction });

export type TurnCommand = (dir: TurnDirection) => Promise<Success | ErrorMsg>;
export const createTurnCommand = (Exec: Exec<Success>): TurnCommand => (
  direction: TurnDirection
) => Exec('turn', { direction });

export type PlaceCommand = (
  slotNum: number,
  direction: Direction
) => Promise<Success | ErrorMsg>;
export const createPlaceCommand = (Exec: Exec<Success>): PlaceCommand => (
  slotNum: number,
  direction: Direction
) => {
  return Exec('place', { slotNum, direction });
};

export type TillCommand = (direction: Direction) => Promise<Success | ErrorMsg>;
export const createTillCommand = (Exec: Exec<Success>): TillCommand => (
  direction: Direction
) => {
  return Exec('till', { direction });
};

export type AttackCommand = (
  direction: Direction
) => Promise<Success | ErrorMsg>;
export const createAttack = (Exec: Exec<Success>): AttackCommand => (
  direction: Direction
) => {
  return Exec('attack', { direction });
};

export type CollectCommand = (item: Items) => Promise<Success | ErrorMsg>;
export const createCollect = (Exec: Exec<Success>): CollectCommand => (
  item: Items
) => {
  return Exec('collect', { item });
};

export type DropCommand = (
  slotNum: number,
  quantity: number,
  direction: Direction
) => Promise<Success | ErrorMsg>;
export const createDrop = (Exec: Exec<Success>): DropCommand => (
  slotNum: number,
  quantity: number,
  direction: Direction
) => {
  return Exec('drop', { slotNum, quantity, direction });
};

export type DropAllCommand = (
  direction: Direction
) => Promise<Success | ErrorMsg>;
export const createDropAll = (Exec: Exec<Success>): DropAllCommand => (
  direction: Direction
) => {
  return Exec('dropall', { direction });
};

export type DetectCommand = (
  direction: Direction
) => Promise<Result | ErrorMsg>;
export const createDetect = (Exec: Exec<Result>): DetectCommand => (
  direction: Direction
) => {
  return Exec('detect', { direction });
};
export type InspectCommand = (
  direction: Direction
) => Promise<BlockName | ErrorMsg>;
export const createInspect = (Exec: Exec<BlockName>): InspectCommand => (
  direction: Direction
) => {
  return Exec('inspect', { direction });
};

export type InspectDataCommand = (
  direction: Direction
) => Promise<Data | ErrorMsg>;
export const createInspectData = (Exec: Exec<Data>): InspectDataCommand => (
  direction: Direction
) => {
  return Exec('inspectdata', { direction });
};

export type DetectRedStoneCommand = (
  direction: Direction
) => Promise<Result | ErrorMsg>;
export const createDetectRedStone = (
  Exec: Exec<Result>
): DetectRedStoneCommand => (direction: Direction) => {
  return Exec('detectredstone', { direction });
};

export type GetItemDetailCommand = (
  slotNum: number
) => Promise<Result | ErrorMsg>;
export const createGetItemDetail = (
  Exec: Exec<Result>
): GetItemDetailCommand => (slotNum: number) => {
  return Exec('getitemdetail', { slotNum });
};

export type GetItemSpaceCommand = (
  slotNum: number
) => Promise<Result | ErrorMsg>;
export const createGetItemSpace = (Exec: Exec<Result>): GetItemSpaceCommand => (
  slotNum: number
) => {
  return Exec('getitemspace', { slotNum });
};

export type TransferCommand = (
  srcslotNum: number,
  quantity: number,
  dstslotNum: number
) => Promise<Result | ErrorMsg>;
export const createTransfer = (Exec: Exec<Result>): TransferCommand => (
  srcslotNum: number,
  quantity: number,
  dstslotNum: number
) => {
  return Exec('transfer', { srcslotNum, quantity, dstslotNum });
};

export type TpToPlayerCommand = () => void;
export const createTpToPlayer = (Exec: Exec<void>): TpToPlayerCommand => () => {
  return Exec('tptoplayer', {});
};
