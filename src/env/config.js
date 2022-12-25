"use strict";
exports.__esModule = true;
var path = require("path");
var dotenv = require("dotenv");
dotenv.config({ path: path.resolve(__dirname, "../../.env") });
var getConfig = function () {
    return {
        CMC_API_KEY: process.env.CMC_API_KEY
    };
};
var getSanitzedConfig = function (config) {
    for (var _i = 0, _a = Object.entries(config); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (value === undefined) {
            throw new Error("Missing key ".concat(key, " in .env"));
        }
    }
    return config;
};
var config = getConfig();
var sanitizedConfig = getSanitzedConfig(config);
exports["default"] = sanitizedConfig;
