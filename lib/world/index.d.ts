import { Exec } from '../command/executor';
import * as Commands from './commands';
import { Count, Fill } from '../command/result';
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
declare const createWorldClient: (Exec: Exec<void | import("../command/result").Result | import("../command/result").Data | import("../command/result").Success | import("../command/result").BlockName | Count | Fill | import("../command/result").CompareCount>) => World;
export default createWorldClient;
