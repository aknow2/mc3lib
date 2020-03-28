"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMoveCommand = function (Exec) { return function (direction) { return Exec('move', { direction: direction }); }; };
exports.createTurnCommand = function (Exec) { return function (direction) { return Exec('turn', { direction: direction }); }; };
exports.createPlaceCommand = function (Exec) { return function (slotNum, direction) {
    return Exec('place', { slotNum: slotNum, direction: direction });
}; };
exports.createTillCommand = function (Exec) { return function (direction) {
    return Exec('till', { direction: direction });
}; };
exports.createAttack = function (Exec) { return function (direction) {
    return Exec('attack', { direction: direction });
}; };
exports.createCollect = function (Exec) { return function (item) {
    return Exec('collect', { item: item });
}; };
exports.createDrop = function (Exec) { return function (slotNum, quantity, direction) {
    return Exec('drop', { slotNum: slotNum, quantity: quantity, direction: direction });
}; };
exports.createDropAll = function (Exec) { return function (direction) {
    return Exec('dropall', { direction: direction });
}; };
exports.createDetect = function (Exec) { return function (direction) {
    return Exec('detect', { direction: direction });
}; };
exports.createInspect = function (Exec) { return function (direction) {
    return Exec('inspect', { direction: direction });
}; };
exports.createInspectData = function (Exec) { return function (direction) {
    return Exec('inspectdata', { direction: direction });
}; };
exports.createDetectRedStone = function (Exec) { return function (direction) {
    return Exec('detectredstone', { direction: direction });
}; };
exports.createGetItemDetail = function (Exec) { return function (slotNum) {
    return Exec('getitemdetail', { slotNum: slotNum });
}; };
exports.createGetItemSpace = function (Exec) { return function (slotNum) {
    return Exec('getitemspace', { slotNum: slotNum });
}; };
exports.createTransfer = function (Exec) { return function (srcslotNum, quantity, dstslotNum) {
    return Exec('transfer', { srcslotNum: srcslotNum, quantity: quantity, dstslotNum: dstslotNum });
}; };
exports.createTpToPlayer = function (Exec) { return function () {
    return Exec('tptoplayer', {});
}; };
//# sourceMappingURL=commands.js.map