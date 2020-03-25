import { Exec } from '../command/executor';
import { Count, Fill } from '../command/result';
declare const createWorldClient: (Exec: Exec<void | import("../command/result").Result | import("../command/result").Data | import("../command/result").Success | import("../command/result").BlockName | Count | Fill | import("../command/result").CompareCount>) => {
    setBlock: (position: import("../command/executor").Position, tileName: import("..").Items, tileData?: number) => Promise<void | import("../command/executor").ErrorMsg>;
    kill: (target: string) => Promise<void | import("../command/executor").ErrorMsg>;
    summon: (spawnPos: import("../command/executor").Position, entityType: string) => Promise<import("../command/executor").ErrorMsg | Count>;
    clone: (begin: import("../command/executor").Position, end: import("../command/executor").Position, destination: import("../command/executor").Position, maskMode?: string, cloneMode?: string, tileName?: string, tileData?: number) => Promise<import("../command/executor").ErrorMsg | Count>;
    executeAsOther: (target: string, position: import("../command/executor").Position, command: string) => Promise<void | import("../command/executor").ErrorMsg>;
    fill: (from: import("../command/executor").Position, to: import("../command/executor").Position, tileName: string, tileData: number, intData?: number, oldBlockHandling?: number, replaceTileName?: string, replaceDataValue?: number) => Promise<import("../command/executor").ErrorMsg | Fill>;
    weather: (type: string, duration: number) => Promise<void | import("../command/executor").ErrorMsg>;
    detect: (target: string, position: import("../command/executor").Position, detect: string, detectPos: import("../command/executor").Position, detectBlock: string, detectData: number, command: string) => Promise<void | import("../command/executor").ErrorMsg>;
};
export default createWorldClient;
