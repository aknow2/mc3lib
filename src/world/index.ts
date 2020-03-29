import { Exec } from '../command/executor';
import * as Commands from './commands';
import { CommandResult, Count, Fill } from '../command/result';

export interface World {
  setBlock: Commands.SetBlockCommand;
  kill: Commands.KillCommand;
  summon: Commands.SummonCommand;
  clone: Commands.CloneCommand;
  executeAsOther: Commands.ExecuteAsOther;
  weather: Commands.WeatherCommand;
  fill: Commands.FillCommand;
  detect: Commands.ExecDetectCommand;
  tpTargetPos: Commands.TpToTargetPosCommand;
  changeTimeByName: Commands.ChangeTimeByNameCommand;
  changeTimeByNumber: Commands.ChangeTimeByNumberCommand;
  tpTargetToTarget: Commands.TpTargetToTargetCommand;
}

const createWorldClient = (Exec: Exec<CommandResult | void>): World => {
  const setBlock = Commands.createSetBlockCommand(Exec as Exec<void>);
  const kill = Commands.createKill(Exec as Exec<void>);
  const summon = Commands.createSummon(Exec as Exec<Count>);
  const clone = Commands.createClone(Exec as Exec<Count>);
  const executeAsOther = Commands.createExecuteAsOther(Exec as Exec<void>);
  const weather = Commands.createWeather(Exec as Exec<void>);
  const fill = Commands.createFill(Exec as Exec<Fill>);
  const detect = Commands.createDetect(Exec as Exec<void>);
  const tpTargetPos = Commands.createTpTargetPos(Exec as Exec<void>);
  const changeTimeByName = Commands.createChangeTimeByName(Exec as Exec<void>);
  const changeTimeByNumber = Commands.createChangeTimeByNumber(
    Exec as Exec<void>
  );
  const tpTargetToTarget = Commands.createTpTargetToTarget(Exec as Exec<void>);
  return {
    setBlock,
    tpTargetPos,
    kill,
    summon,
    clone,
    executeAsOther,
    fill,
    weather,
    detect,
    changeTimeByName,
    changeTimeByNumber,
    tpTargetToTarget
  };
};

export default createWorldClient;
