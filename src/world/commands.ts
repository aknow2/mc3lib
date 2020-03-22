import { Items, Colors } from '../constants';
import { Exec, Position } from '../command/executor';
import { Count } from '../command/result';

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
    position,
    command
  });
};

export const createKill = (sendCommand: Exec<void>) => (target: string) => {
  return sendCommand('kill', {
    target
  });
};
