import { Exec } from '../command/executor';
import * as Commands from './commands';
import { CommandResult } from '../command/result';
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
declare const createAgent: (Exec: Exec<CommandResult>) => Agent;
export default createAgent;
