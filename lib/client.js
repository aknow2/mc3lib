"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var executor_1 = require("./command/executor");
var index_1 = require("./agent/index");
var index_2 = require("./world/index");
var util_1 = require("./util");
var index_3 = require("./listen/index");
var mclient = function (connect, onChangeConnectedStatus) {
    if (connect === void 0) { connect = 'localhost'; }
    var endpoints = util_1.formatUrl(connect);
    var exec = executor_1.default(endpoints.http);
    var agent = index_1.default(exec);
    var world = index_2.default(exec);
    var cancel = index_3.listenConnected(exec, onChangeConnectedStatus);
    return {
        agent: agent,
        world: world,
        close: function () {
            cancel();
        }
    };
};
exports.default = mclient;
//# sourceMappingURL=client.js.map