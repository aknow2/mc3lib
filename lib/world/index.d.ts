import { Exec } from '../command/executor';
declare const createWorldClient: (Exec: Exec<void | import("../command/result").Result | import("../command/result").Data | import("../command/result").Success | import("../command/result").BlockName>) => {
    setBlock: (position: import("../command/executor").Position, tileName: import("..").Items, tileData?: number) => Promise<void | import("../command/executor").ErrorMsg>;
};
export default createWorldClient;
