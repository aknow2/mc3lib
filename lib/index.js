(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./client", "./constants"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client_1 = require("./client");
    var constants_1 = require("./constants");
    exports.Colors = constants_1.Colors;
    exports.client = client_1.default;
    exports.default = client_1.default;
});
//# sourceMappingURL=index.js.map