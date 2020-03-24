import { Items, Colors } from '../constants';
import { Exec, Position } from '../command/executor';
import { Count, Fill, CompareCount } from '../command/result';
import { BlockPosition } from '..';

export const createSetBlockCommand = (sendCommand: Exec<void>) => (
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

export const createSummon = (sendCommand: Exec<Count>) => (
  spawnPos: Position,
  entityType: string
) => {
  return sendCommand('clone', {
    spawnPos: spawnPos.str,
    entityType
  });
};

export const createExecuteAsOther = (sendCommand: Exec<void>) => (
  target: string,
  position: Position,
  command: string
) => {
  return sendCommand('executeasother', {
    target,
    position: position.str,
    command
  });
};

export const createKill = (sendCommand: Exec<void>) => (target: string) => {
  return sendCommand('kill', {
    target
  });
};

export const createDetect = (sendCommand: Exec<void>) => (
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

export const createFill = (sendCommand: Exec<Fill>) => (
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

export const createWeather = (sendCommand: Exec<void>) => (
  type: string,
  duration: number
) => {
  return sendCommand('weather', {
    type,
    duration
  });
};

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

export const createTpTargetToTarget = (sendCommand: Exec<void>) => (
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
export const createChangeTimeByNumber = (sendCommand: Exec<void>) => (
  time: number
) => {
  return sendCommand('timesetbynumber', {
    time
  });
};
export const createChangeTimeByName = (sendCommand: Exec<void>) => (
  time: string
) => {
  return sendCommand('timesetbyname', {
    time
  });
};
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
export const createTestForBlock = (sendCommand: Exec<CompareCount>) => (
  position: BlockPosition,
  tileName: string
) => {
  return sendCommand('testforblock', {
    position: position.str,
    tileName
  });
};
export const createGive = (sendCommand: Exec<void>) => (
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
