"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var config_1 = require("../env/config");
exports["default"] = axios_1["default"].create({
    baseURL: "https://pro-api.coinmarketcap.com",
    timeout: 15000,
    headers: {
        "Content-type": "application/json",
        'X-CMC_PRO_API_KEY': config_1["default"].CMC_API_KEY
    }
});
