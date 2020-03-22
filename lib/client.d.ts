declare const mclient: (connect: string) => {
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
    };
};
export default mclient;
