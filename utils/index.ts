/*
 * @Author: 张晗
 * @Date: 2021-12-22 13:43:54
 * @LastEditors: 张晗
 * @LastEditTime: 2021-12-24 17:00:35
 * @Description:
 */

import Storage, { IStorage } from './storage';
import Format, { IFormat } from './format';
import Download, { IDownload } from './download';
import { getUrlParams, fieldMapping } from './other';

interface IUtils {
  /**
   * 本地存储（localStorage, sessionStorage, cookie）
   */
  Storage: IStorage;

  /**
   * 格式化（日期时间）
   */
  Format: IFormat;

  /**
   * 下载文件
   */
  Download: IDownload;

  /**
   * 获取url的查询参数
   *
   * @param name 指定url名称
   * @returns 指定name对应的值或所有url参数对象
   */
  getUrlParams: (name?: string) => string | object;

  /**
   * 字段映射，根据字段值返回字段映射数组中对应的名称
   *
   * @param id 值
   * @param array 映射数组，默认字段名称是[{name: '', id: ''}]
   * @param fieldNames 自定义映射数组的id/name字段名称
   * @returns name 映射数组值对应的名称
   */
  fieldMapping(
    id: string | number,
    array: Array<any>,
    fieldNames?: { name?: string; id?: string },
  ): string;
}

const UTILS: IUtils = {
  Storage,
  Format,
  Download,
  getUrlParams,
  fieldMapping,
};

export default UTILS;
