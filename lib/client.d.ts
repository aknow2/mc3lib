declare const mclient: (connect?: string, onChangeConnectedStatus?: () => void) => {
    agent: {
        move: (direction: import("./constants").Direction) => Promise<import("./command/executor").ErrorMsg | import("./command/result").Success>;
        attack: (direction: import("./constants").Direction) => Promise<import("./command/executor").ErrorMsg | import("./command/result").Success>;
        turn: (direction: import("./constants").TurnDirection) => Promise<import("./command/executor").ErrorMsg | import("./command/result").Success>;
        collect: (item: import("./constants").Items) => Promise<import("./command/executor").ErrorMsg | import("./command/result").Success>;
        detect: (direction: import("./constants").Direction) => Promise<import("./command/executor").ErrorMsg | import("./command/result").Result>;
        detectRedStone: (direction: import("./constants").Direction) => Promise<import("./command/executor").ErrorMsg | import("./command/result").Result>;
        drop: (slotNum: number, quantity: number, direction: import("./constants").Direction) => Promise<import("./command/executor").ErrorMsg | import("./command/result").Success>;
        dropAll: (direction: import("./constants").Direction) => Promise<import("./command/executor").ErrorMsg | import("./command/result").Success>;
        getItemDetail: (slotNum: number) => Promise<import("./command/executor").ErrorMsg | import("./command/result").Result>;
        getItemSpace: (slotNum: number) => Promise<import("./command/executor").ErrorMsg | import("./command/result").Result>;
        inspect: (direction: import("./constants").Direction) => Promise<import("./command/executor").ErrorMsg | import("./command/result").BlockName>;
        inspectData: (direction: import("./constants").Direction) => Promise<import("./command/executor").ErrorMsg | import("./command/result").Data>;
        place: (slotNum: number, direction: import("./constants").Direction) => Promise<import("./command/executor").ErrorMsg | import("./command/result").Success>;
        till: (direction: import("./constants").Direction) => Promise<import("./command/executor").ErrorMsg | import("./command/result").Success>;
        tpToPlayer: () => Promise<void | import("./command/executor").ErrorMsg>;
        transfer: (srcslotNum: number, quantity: number, dstslotNum: number) => Promise<import("./command/executor").ErrorMsg | import("./command/result").Result>;
    };
    world: {
        setBlock: (position: import("./command/executor").Position, tileName: import("./constants").Items, tileData?: number) => Promise<void | import("./command/executor").ErrorMsg>;
        kill: (target: string) => Promise<void | import("./command/executor").ErrorMsg>;
        summon: (spawnPos: import("./command/executor").Position, entityType: string) => Promise<import("./command/executor").ErrorMsg | import("./command/result").Count>;
        clone: (begin: import("./command/executor").Position, end: import("./command/executor").Position, destination: import("./command/executor").Position, maskMode?: string, cloneMode?: string, tileName?: string, tileData?: number) => Promise<import("./command/executor").ErrorMsg | import("./command/result").Count>;
        executeAsOther: (target: string, position: import("./command/executor").Position, command: string) => Promise<void | import("./command/executor").ErrorMsg>;
        fill: (from: import("./command/executor").Position, to: import("./command/executor").Position, tileName: string, tileData: number, intData?: number, oldBlockHandling?: number, replaceTileName?: string, replaceDataValue?: number) => Promise<import("./command/executor").ErrorMsg | import("./command/result").Fill>;
        weather: (type: string, duration: number) => Promise<void | import("./command/executor").ErrorMsg>;
        detect: (target: string, position: import("./command/executor").Position, detect: string, detectPos: import("./command/executor").Position, detectBlock: string, detectData: number, command: string) => Promise<void | import("./command/executor").ErrorMsg>;
    };
    close: () => void;
};
export default mclient;
