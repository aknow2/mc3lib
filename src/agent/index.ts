import { Exec } from '../command/executor';
import * as Commands from './commands';
import {
  CommandResult,
  Success,
  Result,
  BlockName,
  Data
} from '../command/result';

export interface Agent {
  move: Commands.MoveCommand;
  turn: Commands.TurnCommand;
  attack: Commands.AttackCommand;
  collect: Commands.CollectCommand;
  detect: Commands.DetectCommand;
  detectRedStone: Commands.DetectRedStoneCommand;
  drop: Commands.DropCommand;
  dropAll: Commands.DropAllCommand;
  getItemDetail: Commands.GetItemDetailCommand;
  getItemSpace: Commands.GetItemSpaceCommand;
  inspect: Commands.InspectCommand;
  inspectData: Commands.InspectDataCommand;
  place: Commands.PlaceCommand;
  till: Commands.TillCommand;
  tpToPlayer: Commands.TpToPlayerCommand;
  transfer: Commands.TransferCommand;
}

const createAgent = (Exec: Exec<CommandResult>): Agent => {
  const move = Commands.createMoveCommand(Exec as Exec<Success>);
  const turn = Commands.createTurnCommand(Exec as Exec<Success>);
  const attack = Commands.createAttack(Exec as Exec<Success>);
  const collect = Commands.createCollect(Exec as Exec<Success>);
  const detect = Commands.createDetect(Exec as Exec<Result>);
  const detectRedStone = Commands.createDetectRedStone(Exec as Exec<Result>);
  const drop = Commands.createDrop(Exec as Exec<Success>);
  const dropAll = Commands.createDropAll(Exec as Exec<Success>);
  const getItemDetail = Commands.createGetItemDetail(Exec as Exec<Result>);
  const getItemSpace = Commands.createGetItemSpace(Exec as Exec<Result>);
  const inspect = Commands.createInspect(Exec as Exec<BlockName>);
  const inspectData = Commands.createInspectData(Exec as Exec<Data>);
  const place = Commands.createPlaceCommand(Exec as Exec<Success>);
  const till = Commands.createTillCommand(Exec as Exec<Success>);
  const tpToPlayer = Commands.createTpToPlayer(Exec as Exec<void>);
  const transfer = Commands.createTransfer(Exec as Exec<Result>);
  return {
    move,
    attack,
    turn,
    collect,
    detect,
    detectRedStone,
    drop,
    dropAll,
    getItemDetail,
    getItemSpace,
    inspect,
    inspectData,
    place,
    till,
    tpToPlayer,
    transfer
  };
};

export default createAgent;
