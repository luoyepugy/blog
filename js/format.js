"use strict";
/*
 * @Author: 张晗
 * @Date: 2021-12-24 11:25:14
 * @LastEditors: 张晗
 * @LastEditTime: 2021-12-27 11:18:35
 * @Description: Format格式化
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Format = /** @class */ (function () {
    function Format() {
    }
    Format.prototype.formatZero = function (data) {
        return data < 10 ? '0' + data : data;
    };
    /**
     * 将日期格式化为字符串
     *
     * @param date 指定日期
     * @param month 指定当前日期上个月-1/下个月+1
     * @param division 日期分隔符
     * @returns eg:'2020-10-02'
     */
    Format.prototype.dateToString = function (date, month, division) {
        if (date === void 0) { date = new Date(); }
        if (month === void 0) { month = 0; }
        if (division === void 0) { division = '-'; }
        var y = date.getFullYear();
        var m = date.getMonth() + 1 + month;
        var d = date.getDate();
        if (m > 12) {
            y = y + 1;
            m = m - 12;
        }
        return y + division + this.formatZero(m) + division + this.formatZero(d);
    };
    /**
     * 时间戳转日期时间
     *
     * @param timestamp 时间戳
     * @param division 日期分隔符
     * @returns {String} eg: '2020-10-02 12:00:00'
     */
    Format.prototype.timestampToDateTime = function (timestamp, division) {
        if (division === void 0) { division = '-'; }
        //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var date = new Date(timestamp.toString().length === 10 ? timestamp * 1000 : timestamp);
        var Y = date.getFullYear() + division;
        var M = this.formatZero(date.getMonth() + 1) + division;
        var D = this.formatZero(date.getDate()) + ' ';
        var h = this.formatZero(date.getHours()) + ':';
        var m = this.formatZero(date.getMinutes()) + ':';
        var s = this.formatZero(date.getSeconds());
        return Y + M + D + h + m + s;
    };
    /**
     * 时间戳转日期
     *
     * @param timestamp 时间戳
     * @param division 日期分隔符，默认为'-'
     * @returns {String} eg: '2020-10-02'
     */
    Format.prototype.timestampToDate = function (timestamp, division) {
        if (division === void 0) { division = '-'; }
        var dateTime = this.timestampToDateTime(timestamp, division);
        return dateTime.split(' ')[0];
    };
    /**
     * 时间戳转时分秒
     *
     * @param timestamp 时间戳
     * @returns {String} eg: '12:00:00'
     */
    Format.prototype.timestampToTime = function (timestamp) {
        var dateTime = this.timestampToDateTime(timestamp);
        return dateTime.split(' ')[1];
    };
    return Format;
}());
var format = new Format();
exports.default = format;
