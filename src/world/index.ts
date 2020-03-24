import { Exec } from '../command/executor';
import * as Commands from './commands';
import { CommandResult, Count, Fill } from '../command/result';

const createWorldClient = (Exec: Exec<CommandResult | void>) => {
  const setBlock = Commands.createSetBlockCommand(Exec as Exec<void>);
  const kill = Commands.createKill(Exec as Exec<void>);
  const summon = Commands.createSummon(Exec as Exec<Count>);
  const clone = Commands.createClone(Exec as Exec<Count>);
  const executeAsOther = Commands.createExecuteAsOther(Exec as Exec<void>);
  const weather = Commands.createWeather(Exec as Exec<void>);
  const fill = Commands.createFill(Exec as Exec<Fill>);
  const detect = Commands.createDetect(Exec as Exec<void>);
  return {
    setBlock,
    kill,
    summon,
    clone,
    executeAsOther,
    fill,
    weather,
    detect
  };
};

export default createWorldClient;
