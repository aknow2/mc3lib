(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createSetBlockCommand = function (sendCommand) { return function (position, tileName, tileData) {
        if (tileData === void 0) { tileData = 0; }
        return sendCommand('setblock', {
            position: position.str,
            tileName: tileName,
            tileData: tileData
        });
    }; };
    exports.createClone = function (sendCommand) { return function (begin, end, destination, maskMode, cloneMode, tileName, tileData) {
        return sendCommand('clone', {
            begin: begin.str,
            end: end.str,
            destination: destination.str,
            tileName: tileName,
            tileData: tileData,
            maskMode: maskMode,
            cloneMode: cloneMode
        });
    }; };
    exports.createSummon = function (sendCommand) { return function (spawnPos, entityType) {
        return sendCommand('clone', {
            spawnPos: spawnPos.str,
            entityType: entityType
        });
    }; };
});
//# sourceMappingURL=commands.js.map