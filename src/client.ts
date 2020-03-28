import createExec from './command/executor';
import createAgent from './agent/index';
import createWorldClient from './world/index';
import { CommandResult } from './command/result';
import { formatUrl } from './util';
import { listenConnected, OnChangeConnectedStatus } from './listen/index';

const mclient = (
  connect: string = 'localhost',
  onChangeConnectedStatus?: OnChangeConnectedStatus
) => {
  const endpoints = formatUrl(connect);
  const exec = createExec<CommandResult>(endpoints.http);
  const agent = createAgent(exec);
  const world = createWorldClient(exec);

  const cancel = listenConnected(exec, onChangeConnectedStatus);
  return {
    agent,
    world,
    close: () => {
      cancel();
    }
  };
};

export default mclient;
