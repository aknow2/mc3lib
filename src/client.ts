import createExec from './command/executor';
import createAgent from './agent/index';
import createWorldClient from './world/index';
import { CommandResult } from './command/result';
import { formatUrl } from './util';

const mclient = (connect: string) => {
  const endpoints = formatUrl(connect);
  const Exec = createExec<CommandResult>(endpoints.http);
  const agent = createAgent(Exec);
  const world = createWorldClient(Exec);
  return {
    agent,
    world
  };
};

export default mclient;
