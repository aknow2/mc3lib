import { Agent } from './agent/index';
import { OnChangeConnectedStatus } from './listen/index';
export interface MCClient {
    agent: Agent;
    world: any;
    close: () => void;
}
declare const mclient: (connect?: string, onChangeConnectedStatus?: OnChangeConnectedStatus) => MCClient;
export default mclient;
