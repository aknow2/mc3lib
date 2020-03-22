(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./command/executor", "./agent/index", "./world/index", "./util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var executor_1 = require("./command/executor");
    var index_1 = require("./agent/index");
    var index_2 = require("./world/index");
    var util_1 = require("./util");
    var mclient = function (connect) {
        var endpoints = util_1.formatUrl(connect);
        var Exec = executor_1.default(endpoints.http);
        var agent = index_1.default(Exec);
        var world = index_2.default(Exec);
        return {
            agent: agent,
            world: world
        };
    };
    exports.default = mclient;
});
//# sourceMappingURL=client.js.map