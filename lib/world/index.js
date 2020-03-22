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
        return {
            setBlock: setBlock
        };
    };
    exports.default = createWorldClient;
});
//# sourceMappingURL=index.js.map