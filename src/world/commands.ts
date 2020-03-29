import { Items, Colors } from '../constants';
import { Exec, Position, ErrorMsg } from '../command/executor';
import { Count, Fill, CompareCount } from '../command/result';
import { BlockPosition } from '..';

export type SetBlockCommand = (
  position: Position,
  tileName: Items,
  tileData: number | Colors
) => void;
export const createSetBlockCommand = (
  sendCommand: Exec<void>
): SetBlockCommand => (
  position: Position,
  tileName: Items,
  tileData: number | Colors = 0
) => {
  return sendCommand('setblock', {
    position: position.str,
    tileName,
    tileData
  });
};

export type CloneCommand = (
  begin: Position,
  end: Position,
  destination: Position,
  maskMode?: string,
  cloneMode?: string,
  tileName?: string,
  tileData?: number
) => Promise<Count | ErrorMsg>;
export const createClone = (sendCommand: Exec<Count>) => (
  begin: Position,
  end: Position,
  destination: Position,
  maskMode?: string,
  cloneMode?: string,
  tileName?: string,
  tileData?: number
) => {
  return sendCommand('clone', {
    begin: begin.str,
    end: end.str,
    destination: destination.str,
    tileName,
    tileData,
    maskMode,
    cloneMode
  });
};

export type SummonCommand = (
  spawnPos: Position,
  entityType: string
) => Promise<Count | ErrorMsg>;
export const createSummon = (sendCommand: Exec<Count>) => (
  spawnPos: Position,
  entityType: string
) => {
  return sendCommand('clone', {
    spawnPos: spawnPos.str,
    entityType
  });
};

export type ExecuteAsOther = (
  target: string,
  position: Position,
  command: string
) => Promise<void | ErrorMsg>;
export const createExecuteAsOther = (
  sendCommand: Exec<void>
): ExecuteAsOther => (target: string, position: Position, command: string) => {
  return sendCommand('executeasother', {
    target,
    position: position.str,
    command
  });
};

export type KillCommand = (target: string) => Promise<void | ErrorMsg>;
export const createKill = (sendCommand: Exec<void>): KillCommand => (
  target: string
) => {
  return sendCommand('kill', {
    target
  });
};

export type ExecDetectCommand = (
  target: string,
  position: Position,
  detect: string,
  detectPos: Position,
  detectBlock: string | Items,
  detectData: number,
  command: string
) => Promise<void | ErrorMsg>;
export const createDetect = (sendCommand: Exec<void>): ExecDetectCommand => (
  target: string,
  position: Position,
  detect: string,
  detectPos: Position,
  detectBlock: string | Items,
  detectData: number,
  command: string
) => {
  return sendCommand('executedetect', {
    target,
    blockPos: position.str,
    detect,
    detectPos: detectPos.str,
    detectBlock,
    detectData,
    command
  });
};

export type FillCommand = (
  from: Position,
  to: Position,
  tileName: string | Items,
  tileData: number,
  intData?: number,
  oldBlockHandling?: number,
  replaceTileName?: string | Items,
  replaceDataValue?: number
) => Promise<Fill | ErrorMsg>;
export const createFill = (sendCommand: Exec<Fill>): FillCommand => (
  from: Position,
  to: Position,
  tileName: string | Items,
  tileData: number,
  intData?: number,
  oldBlockHandling?: number,
  replaceTileName?: string | Items,
  replaceDataValue?: number
) => {
  return sendCommand('fill', {
    from: from.str,
    to: to.str,
    tileName,
    tileData,
    intData,
    oldBlockHandling,
    replaceTileName,
    replaceDataValue
  });
};

export type WeatherCommand = (
  type: string,
  duration: number
) => Promise<void | ErrorMsg>;
export const createWeather = (sendCommand: Exec<void>): WeatherCommand => (
  type: string,
  duration: number
) => {
  return sendCommand('weather', {
    type,
    duration
  });
};

export type TpToTargetPosCommand = (
  victim: string,
  destination: Position,
  yRot?: number,
  xRot?: number
) => Promise<void | ErrorMsg>;
export const createTpTargetPos = (sendCommand: Exec<void>) => (
  victim: string,
  destination: Position,
  yRot?: number,
  xRot?: number
) => {
  return sendCommand('tptargettopos', {
    victim,
    destination: destination.str,
    'y-rot': yRot,
    'x-rot': xRot
  });
};

export type TpTargetToTargetCommand = (
  victim: string,
  destination: string,
  yRot?: number,
  xRot?: number
) => Promise<void | ErrorMsg>;
export const createTpTargetToTarget = (
  sendCommand: Exec<void>
): TpTargetToTargetCommand => (
  victim: string,
  destination: string,
  yRot?: number,
  xRot?: number
) => {
  return sendCommand('tptargettotarget', {
    victim,
    destination,
    'y-rot': yRot,
    'x-rot': xRot
  });
};
export type ChangeTimeByNumberCommand = (
  time: number
) => Promise<void | ErrorMsg>;
export const createChangeTimeByNumber = (
  sendCommand: Exec<void>
): ChangeTimeByNumberCommand => (time: number) => {
  return sendCommand('timesetbynumber', {
    time
  });
};

export type ChangeTimeByNameCommand = (
  time: string
) => Promise<void | ErrorMsg>;
export const createChangeTimeByName = (
  sendCommand: Exec<void>
): ChangeTimeByNameCommand => (time: string) => {
  return sendCommand('timesetbyname', {
    time
  });
};

export type TestForBlocks = (
  compareCount: number,
  matches: boolean,
  begin: BlockPosition,
  end: BlockPosition,
  destination: BlockPosition,
  mode?: string
) => Promise<CompareCount | ErrorMsg>;
export const createTestForBlocks = (sendCommand: Exec<CompareCount>) => (
  compareCount: number,
  matches: boolean,
  begin: BlockPosition,
  end: BlockPosition,
  destination: BlockPosition,
  mode?: string
) => {
  return sendCommand('testforblocks', {
    compareCount,
    matches,
    begin: begin.str,
    end: end.str,
    destination: destination.str,
    mode
  });
};

export type TestForBlockCommand = (
  position: BlockPosition,
  tileName: string
) => Promise<CompareCount | ErrorMsg>;
export const createTestForBlock = (sendCommand: Exec<CompareCount>) => (
  position: BlockPosition,
  tileName: string
) => {
  return sendCommand('testforblock', {
    position: position.str,
    tileName
  });
};

export type GiveCommand = (
  player: string,
  itemName: string | Items,
  data: number,
  amount?: number
) => Promise<void | ErrorMsg>;
export const createGive = (sendCommand: Exec<void>): GiveCommand => (
  player: string,
  itemName: string | Items,
  data: number,
  amount?: number
) => {
  return sendCommand('give', {
    player,
    itemName,
    data,
    amount
  });
};
