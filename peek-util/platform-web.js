"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var peek_util_1 = require("@synerty/peek-util");
var Platform = /** @class */ (function () {
    function Platform() {
    }
    Platform.isNativeScript = function () {
        return false;
    };
    Platform.isWeb = function () {
        return true;
    };
    Platform.deviceSize = function () {
        return peek_util_1.DeviceSizeE.default;
    };
    return Platform;
}());
exports.Platform = Platform;
//# sourceMappingURL=/Users/jchesney/project/peek-util-web/peek-util/platform-web.js.map