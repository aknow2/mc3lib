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
exports.createExecuteAsOther = function (sendCommand) { return function (target, position, command) {
    return sendCommand('executeasother', {
        target: target,
        position: position.str,
        command: command
    });
}; };
exports.createKill = function (sendCommand) { return function (target) {
    return sendCommand('kill', {
        target: target
    });
}; };
exports.createDetect = function (sendCommand) { return function (target, position, detect, detectPos, detectBlock, detectData, command) {
    return sendCommand('executedetect', {
        target: target,
        blockPos: position.str,
        detect: detect,
        detectPos: detectPos.str,
        detectBlock: detectBlock,
        detectData: detectData,
        command: command
    });
}; };
exports.createFill = function (sendCommand) { return function (from, to, tileName, tileData, intData, oldBlockHandling, replaceTileName, replaceDataValue) {
    return sendCommand('fill', {
        from: from.str,
        to: to.str,
        tileName: tileName,
        tileData: tileData,
        intData: intData,
        oldBlockHandling: oldBlockHandling,
        replaceTileName: replaceTileName,
        replaceDataValue: replaceDataValue
    });
}; };
exports.createWeather = function (sendCommand) { return function (type, duration) {
    return sendCommand('weather', {
        type: type,
        duration: duration
    });
}; };
exports.createTpTargetPos = function (sendCommand) { return function (victim, destination, yRot, xRot) {
    return sendCommand('tptargettopos', {
        victim: victim,
        destination: destination.str,
        'y-rot': yRot,
        'x-rot': xRot
    });
}; };
exports.createTpTargetToTarget = function (sendCommand) { return function (victim, destination, yRot, xRot) {
    return sendCommand('tptargettotarget', {
        victim: victim,
        destination: destination,
        'y-rot': yRot,
        'x-rot': xRot
    });
}; };
exports.createChangeTimeByNumber = function (sendCommand) { return function (time) {
    return sendCommand('timesetbynumber', {
        time: time
    });
}; };
exports.createChangeTimeByName = function (sendCommand) { return function (time) {
    return sendCommand('timesetbyname', {
        time: time
    });
}; };
exports.createTestForBlocks = function (sendCommand) { return function (compareCount, matches, begin, end, destination, mode) {
    return sendCommand('testforblocks', {
        compareCount: compareCount,
        matches: matches,
        begin: begin.str,
        end: end.str,
        destination: destination.str,
        mode: mode
    });
}; };
exports.createTestForBlock = function (sendCommand) { return function (position, tileName) {
    return sendCommand('testforblock', {
        position: position.str,
        tileName: tileName
    });
}; };
exports.createGive = function (sendCommand) { return function (player, itemName, data, amount) {
    return sendCommand('give', {
        player: player,
        itemName: itemName,
        data: data,
        amount: amount
    });
}; };
//# sourceMappingURL=commands.js.map