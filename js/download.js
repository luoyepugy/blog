"use strict";
/*
 * @Author: 张晗
 * @Date: 2021-12-24 11:25:01
 * @LastEditors: 张晗
 * @LastEditTime: 2021-12-27 11:18:54
 * @Description: Download下载
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Download = /** @class */ (function () {
    function Download() {
    }
    /**
     * 通过a标签下载
     *
     * @param url 接口地址
     * @param params 接口参数，eg: {fileName: '导出'}
     * @param name 文件名称
     */
    Download.prototype.getByA = function (url, params, name) {
        var aLink = document.createElement('a');
        document.body.appendChild(aLink);
        aLink.style.display = 'none';
        var newParams = Object.keys(params).map(function (v, i) {
            return v + '=' + params[v] + '&';
        });
        aLink.href = "".concat(url, "?").concat(newParams.join(''));
        aLink.download = name !== null && name !== void 0 ? name : '文件';
        aLink.click();
        document.body.removeChild(aLink);
    };
    /**
     * 通过表单form下载
     *
     * @param url 接口地址
     * @param params 接口参数，eg: {fileName: '导出'}
     * @param target 指定iframe目标名称
     */
    Download.prototype.getByForm = function (url, params, target) {
        var form = document.createElement('form');
        form.action = url;
        form.method = 'post';
        form.style.display = 'block';
        form.target = 'exportIfram';
        var iframe = document.createElement('iframe');
        iframe.name = 'exportIfram';
        iframe.src = '';
        iframe.frameBorder = '0';
        document.body.appendChild(iframe);
        if (target) {
            form.target = target;
        }
        for (var i in params) {
            var opt_1 = document.createElement('input');
            opt_1.name = i;
            opt_1.value = params[i];
            form.appendChild(opt_1);
        }
        var opt = document.createElement('input');
        opt.type = 'submit';
        form.appendChild(opt);
        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);
    };
    return Download;
}());
var download = new Download();
exports.default = download;
