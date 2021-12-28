"use strict";
/*
 * @Author: 张晗
 * @Date: 2021-12-24 11:25:35
 * @LastEditors: 张晗
 * @LastEditTime: 2021-12-27 11:18:04
 * @Description: other其他
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Other = /** @class */ (function () {
    function Other() {
    }
    /**
     * 查询url参数
     * @param name 需要查询的url的名称
     * @returns {string} url名称对应的值
     */
    Other.prototype.getUrlParams = function (name) {
        var hash = window.location.hash, index = hash.indexOf('?');
        var search = window.location.search || (index !== -1 ? hash.substr(index) : ''), o = {}, item;
        if (search) {
            search = search.substr(1).split('&');
            for (var i = 0, len = search.length; i < len; i++) {
                item = search[i].split('=');
                o[item[0]] = item[1];
            }
        }
        return name ? o[name] : o;
    };
    /**
     * 字段映射，根据字段值返回字段映射数组中对应的名称
     *
     * @param id 值
     * @param array 映射数组，默认字段名称是[{name: '', id: ''}]
     * @param fieldNames 自定义映射数组的id/name字段名称
     * @returns name 映射数组值对应的名称
     */
    Other.prototype.fieldMapping = function (id, array, fieldNames) {
        var _a, _b;
        var defaultFieldNames = {
            name: (_a = fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.name) !== null && _a !== void 0 ? _a : 'name',
            id: (_b = fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.id) !== null && _b !== void 0 ? _b : 'id',
        };
        var result = [], strArr = Array.isArray(id) ? id : [].concat([id]);
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var i = array_1[_i];
            if (~strArr.indexOf(i[defaultFieldNames.id])) {
                result.push(i[defaultFieldNames.name]);
            }
        }
        return result.join(',');
    };
    return Other;
}());
var other = new Other();
exports.default = other;
//# sourceMappingURL=other.js.map