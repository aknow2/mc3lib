(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./commands"], factory);
    }
})(function (require, exports) {
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
});
//# sourceMappingURL=index.js.map