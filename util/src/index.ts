/*
 * @Author: 张晗
 * @Date: 2021-12-22 13:43:54
 * @LastEditors: 张晗
 * @LastEditTime: 2021-12-27 11:28:44
 * @Description:
 */

import Storage, { IStorage } from './storage';
import Format, { IFormat } from './format';
import Download, { IDownload } from './download';
import Other, { IOther } from './other';

interface IUtils extends IOther {
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
}

const { getUrlParams, fieldMapping } = Other;

const UTILS: IUtils = {
  Storage,
  Format,
  Download,
  getUrlParams,
  fieldMapping,
};

export default UTILS;
