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
    return {
        setBlock: setBlock,
        kill: kill,
        summon: summon,
        clone: clone,
        executeAsOther: executeAsOther,
        fill: fill,
        weather: weather,
        detect: detect
    };
};
exports.default = createWorldClient;
//# sourceMappingURL=index.js.map