"use strict";
exports.__esModule = true;
var axios_1 = require("./axios");
var responseBody = function (response) { return response.data; };
var requests = {
    get: function (url) { return axios_1["default"].get(url).then(responseBody); }
};
exports["default"] = requests;
