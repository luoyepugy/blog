export interface IDownload {
    /**
     * 通过a标签下载
     *
     * @param url 接口地址
     * @param params 接口参数，eg: {fileName: '导出'}
     * @param name 文件名称
     */
    getByA(url: string, params: any, name?: string): void;
    /**
     * 通过表单form下载
     *
     * @param url 接口地址
     * @param params 接口参数，eg: {fileName: '导出'}
     * @param target 指定iframe目标名称
     */
    getByForm(url: string, params: any, target?: string): void;
}
declare class Download implements IDownload {
    /**
     * 通过a标签下载
     *
     * @param url 接口地址
     * @param params 接口参数，eg: {fileName: '导出'}
     * @param name 文件名称
     */
    getByA(url: string, params: any, name?: string): void;
    /**
     * 通过表单form下载
     *
     * @param url 接口地址
     * @param params 接口参数，eg: {fileName: '导出'}
     * @param target 指定iframe目标名称
     */
    getByForm(url: string, params: any, target?: string): void;
}
declare const download: Download;
export default download;
