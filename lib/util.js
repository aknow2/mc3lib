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
    exports.createQueryStrings = function (query) {
        var entries = Object.entries(query);
        return entries.reduce(function (acc, value, index) {
            if (index === 0) {
                return acc + value[0] + "=" + value[1];
            }
            return acc + "&" + value[0] + "=" + value[1];
        }, '');
    };
    exports.createPositionStr = function (position, isRelative) {
        var prefix = isRelative ? '~' : '';
        return position.reduce(function (acc, current, index) {
            if (index === 0) {
                return acc + prefix + current;
            }
            return acc + "%20" + prefix + current;
        }, '');
    };
    var connectCommand = '/connect';
    var createHttpAddress = function (ip) { return "http://" + ip + ":8080"; };
    var createWsAddress = function (ip) { return "ws://" + ip + ":19131"; };
    exports.formatUrl = function (connect) {
        if (!connect) {
            throw new Error('Please, set /connect command or IP');
        }
        if (connect.includes(connectCommand)) {
            var ip = connect
                .replace(connectCommand, '')
                .replace(/ /g, '')
                .split(':')[0];
            return {
                http: createHttpAddress(ip),
                ws: createWsAddress(ip)
            };
        }
        if (connect.includes('http://')) {
            var ip = connect.replace('http://', '').split(':')[0];
            return {
                http: connect,
                ws: createWsAddress(ip)
            };
        }
        return {
            http: createHttpAddress(connect),
            ws: createWsAddress(connect)
        };
    };
});
//# sourceMappingURL=util.js.map