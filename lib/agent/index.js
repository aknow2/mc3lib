"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Commands = require("./commands");
var createAgent = function (Exec) {
    var move = Commands.createMoveCommand(Exec);
    var turn = Commands.createTurnCommand(Exec);
    var attack = Commands.createAttack(Exec);
    var collect = Commands.createCollect(Exec);
    var detect = Commands.createDetect(Exec);
    var detectRedStone = Commands.createDetectRedStone(Exec);
    var drop = Commands.createDrop(Exec);
    var dropAll = Commands.createDropAll(Exec);
    var getItemDetail = Commands.createGetItemDetail(Exec);
    var getItemSpace = Commands.createGetItemSpace(Exec);
    var inspect = Commands.createInspect(Exec);
    var inspectData = Commands.createInspectData(Exec);
    var place = Commands.createPlaceCommand(Exec);
    var till = Commands.createTillCommand(Exec);
    var tpToPlayer = Commands.createTpToPlayer(Exec);
    var transfer = Commands.createTransfer(Exec);
    return {
        move: move,
        attack: attack,
        turn: turn,
        collect: collect,
        detect: detect,
        detectRedStone: detectRedStone,
        drop: drop,
        dropAll: dropAll,
        getItemDetail: getItemDetail,
        getItemSpace: getItemSpace,
        inspect: inspect,
        inspectData: inspectData,
        place: place,
        till: till,
        tpToPlayer: tpToPlayer,
        transfer: transfer
    };
};
exports.default = createAgent;
//# sourceMappingURL=index.js.map