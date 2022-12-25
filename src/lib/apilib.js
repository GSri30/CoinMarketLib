"use strict";
exports.__esModule = true;
exports.APILIB = void 0;
var index_1 = require("../services/api/index");
var APILIB = /** @class */ (function () {
    function APILIB() {
    }
    APILIB.getCryptoCurrencies = function (args) {
        return index_1["default"].getCryptoCurrencies(args);
    };
    return APILIB;
}());
exports.APILIB = APILIB;
