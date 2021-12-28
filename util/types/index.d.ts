import { IStorage } from './storage';
import { IFormat } from './format';
import { IDownload } from './download';
import { IOther } from './other';
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
declare const UTILS: IUtils;
export default UTILS;
