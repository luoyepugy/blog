"use strict";
/*
 * @Author: 张晗
 * @Date: 2021-12-22 12:31:48
 * @LastEditors: 张晗
 * @LastEditTime: 2021-12-24 15:52:46
 * @Description: Storage本地存储
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Storage = /** @class */ (function () {
    function Storage() {
        this.storage = localStorage;
    }
    // 加密
    Storage.prototype.encrypt = function (value) {
        var encryptValue = new String(), mask, maskValue;
        for (var i = 0, len = value.length; i < len; i++) {
            mask = Math.round(Math.random() * 111) + 77;
            maskValue = value.charCodeAt(i) + mask;
            mask += i;
            encryptValue += String.fromCharCode(maskValue, mask);
        }
        return encryptValue;
    };
    // 解密
    Storage.prototype.decrypt = function (value) {
        var decryptValue = '', k = 0, v, m;
        var decrypt = function (v, m, i) {
            v = v.charCodeAt(0);
            m = m.charCodeAt(0);
            m -= i;
            v -= m;
            return String.fromCharCode(v);
        };
        for (var i = 0, len = value.length; i < len; i++) {
            if (!(i % 2)) {
                v = value[i];
            }
            else {
                m = value[i];
                decryptValue += decrypt(v, m, k);
                k++;
            }
        }
        return decryptValue;
    };
    /**
     * 根据名称获取localStorage数据
     *
     * @param name 名称
     * @returns 值
     */
    Storage.prototype.get = function (name) {
        var value = this.storage.getItem(name);
        return value ? JSON.parse(this.decrypt(value)) : value;
    };
    /**
     * 设置localStorage名称数据项
     *
     * @param name 名称
     * @param value 值
     */
    Storage.prototype.set = function (name, value) {
        this.storage.setItem(name, value ? this.encrypt(JSON.stringify(value)) : value);
    };
    /**
     * 删除localStorage指定名称数据
     *
     * @param name 名称
     */
    Storage.prototype.remove = function (name) {
        this.storage.removeItem(name);
    };
    return Storage;
}());
var storage = new Storage();
exports.default = storage;
