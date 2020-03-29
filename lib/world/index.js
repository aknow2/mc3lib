"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Commands = require("./commands");
var createWorldClient = function (Exec) {
    var setBlock = Commands.createSetBlockCommand(Exec);
    var kill = Commands.createKill(Exec);
    var summon = Commands.createSummon(Exec);
    var clone = Commands.createClone(Exec);
    var executeAsOther = Commands.createExecuteAsOther(Exec);
    var weather = Commands.createWeather(Exec);
    var fill = Commands.createFill(Exec);
    var detect = Commands.createDetect(Exec);
    var tpTargetPos = Commands.createTpTargetPos(Exec);
    var changeTimeByName = Commands.createChangeTimeByName(Exec);
    var changeTimeByNumber = Commands.createChangeTimeByNumber(Exec);
    var tpTargetToTarget = Commands.createTpTargetToTarget(Exec);
    return {
        setBlock: setBlock,
        tpTargetPos: tpTargetPos,
        kill: kill,
        summon: summon,
        clone: clone,
        executeAsOther: executeAsOther,
        fill: fill,
        weather: weather,
        detect: detect,
        changeTimeByName: changeTimeByName,
        changeTimeByNumber: changeTimeByNumber,
        tpTargetToTarget: tpTargetToTarget
    };
};
exports.default = createWorldClient;
//# sourceMappingURL=index.js.map