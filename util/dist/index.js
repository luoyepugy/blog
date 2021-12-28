"use strict";
/*
 * @Author: 张晗
 * @Date: 2021-12-22 13:43:54
 * @LastEditors: 张晗
 * @LastEditTime: 2021-12-27 11:28:44
 * @Description:
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var storage_1 = __importDefault(require("./storage"));
var format_1 = __importDefault(require("./format"));
var download_1 = __importDefault(require("./download"));
var other_1 = __importDefault(require("./other"));
var getUrlParams = other_1.default.getUrlParams, fieldMapping = other_1.default.fieldMapping;
var UTILS = {
    Storage: storage_1.default,
    Format: format_1.default,
    Download: download_1.default,
    getUrlParams: getUrlParams,
    fieldMapping: fieldMapping,
};
exports.default = UTILS;
//# sourceMappingURL=index.js.map