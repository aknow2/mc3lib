import { Exec } from '../command/executor';

type ConnectedStatus = 'connected' | 'disconnected';

export type OnChangeConnectedStatus = (st: ConnectedStatus) => void;

export const listenConnected = (
  exec: Exec<void | {}>,
  onChangeConnectedStatus?: OnChangeConnectedStatus
) => {
  let status: ConnectedStatus | '' = '';
  const clear = setInterval(async () => {
    try {
      await exec('connected', {});
      if (status !== '' && onChangeConnectedStatus) {
        onChangeConnectedStatus('connected');
      }
    } catch (e) {
      if (onChangeConnectedStatus) {
        onChangeConnectedStatus('disconnected');
      }
      clearInterval(clear);
      throw e;
    }
  }, 1000);
  return () => {
    clearInterval(clear);
  };
};
