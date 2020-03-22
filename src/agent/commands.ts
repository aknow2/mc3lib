import { Direction, TurnDirection, Items } from '../constants';
import { Exec } from '../command/executor';
import { Success, Result, BlockName, Data } from '../command/result';

export const createMoveCommand = (Exec: Exec<Success>) => (
  direction: Direction
) => Exec('move', { direction });

export const createTurnCommand = (Exec: Exec<Success>) => (
  direction: TurnDirection
) => Exec('turn', { direction });

export const createPlaceCommand = (Exec: Exec<Success>) => (
  slotNum: number,
  direction: Direction
) => {
  return Exec('place', { slotNum, direction });
};

export const createTillCommand = (Exec: Exec<Success>) => (
  direction: Direction
) => {
  return Exec('till', { direction });
};

export const createAttack = (Exec: Exec<Success>) => (direction: Direction) => {
  return Exec('attack', { direction });
};

export const createCollect = (Exec: Exec<Success>) => (item: Items) => {
  return Exec('collect', { item });
};

export const createDrop = (Exec: Exec<Success>) => (
  slotNum: number,
  quantity: number,
  direction: Direction
) => {
  return Exec('drop', { slotNum, quantity, direction });
};

export const createDropAll = (Exec: Exec<Success>) => (
  direction: Direction
) => {
  return Exec('dropall', { direction });
};

export const createDetect = (Exec: Exec<Result>) => (direction: Direction) => {
  return Exec('detect', { direction });
};

export const createInspect = (Exec: Exec<BlockName>) => (
  direction: Direction
) => {
  return Exec('inspect', { direction });
};

export const createInspectData = (Exec: Exec<Data>) => (
  direction: Direction
) => {
  return Exec('inspectdata', { direction });
};

export const createDetectRedStone = (Exec: Exec<Result>) => (
  direction: Direction
) => {
  return Exec('detectredstone', { direction });
};

export const createGetItemDetail = (Exec: Exec<Result>) => (
  slotNum: number
) => {
  return Exec('getitemdetail', { slotNum });
};

export const createGetItemSpace = (Exec: Exec<Result>) => (slotNum: number) => {
  return Exec('getitemspace', { slotNum });
};

export const createTransfer = (Exec: Exec<Result>) => (
  srcslotNum: number,
  quantity: number,
  dstslotNum: number
) => {
  return Exec('transfer', { srcslotNum, quantity, dstslotNum });
};

export const createTpToPlayer = (Exec: Exec<void>) => () => {
  return Exec('tptoplayer', {});
};
