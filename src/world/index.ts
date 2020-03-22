import { Exec } from '../command/executor';
import * as Commands from './commands';
import { CommandResult } from '../command/result';

const createWorldClient = (Exec: Exec<CommandResult | void>) => {
  const setBlock = Commands.createSetBlockCommand(Exec as Exec<void>);
  return {
    setBlock
  };
};

export default createWorldClient;
