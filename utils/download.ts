/*
 * @Author: 张晗
 * @Date: 2021-12-24 11:25:01
 * @LastEditors: 张晗
 * @LastEditTime: 2021-12-24 17:01:45
 * @Description: Download下载
 */

export interface IDownload {
  /**
   * 通过a标签下载
   *
   * @param url 接口地址
   * @param params 接口参数，eg: {fileName: '导出'}
   * @param name 文件名称
   */
  labelByA: (url: string, params: any, name?: string) => void;

  /**
   * 通过表单form下载
   *
   * @param url 接口地址
   * @param params 接口参数，eg: {fileName: '导出'}
   * @param target 指定iframe目标名称
   */
  labelByForm: (url: string, params: any, target?: string) => void;
}

class Download implements IDownload {
  /**
   * 通过a标签下载
   *
   * @param url 接口地址
   * @param params 接口参数，eg: {fileName: '导出'}
   * @param name 文件名称
   */
  labelByA(url: string, params: any, name?: string): void {
    const aLink = document.createElement('a');
    document.body.appendChild(aLink);
    aLink.style.display = 'none';

    let newParams = Object.keys(params).map((v, i) => {
      return v + '=' + params[v] + '&';
    });
    aLink.href = `${url}?${newParams.join('')}`;
    if (name) aLink.download = name;
    aLink.click();
    document.body.removeChild(aLink);
  }

  /**
   * 通过表单form下载
   *
   * @param url 接口地址
   * @param params 接口参数，eg: {fileName: '导出'}
   * @param target 指定iframe目标名称
   */
  labelByForm(url: string, params: any, target?: string): void {
    const form = document.createElement('form');
    form.action = url;
    form.method = 'post';
    form.style.display = 'block';
    form.target = 'exportIfram';

    const iframe = document.createElement('iframe');
    iframe.name = 'exportIfram';
    iframe.src = '';
    iframe.frameBorder = '0';
    document.body.appendChild(iframe);

    if (target) {
      form.target = target;
    }

    for (const i in params) {
      const opt = document.createElement('input');
      opt.name = i;
      opt.value = params[i];
      form.appendChild(opt);
    }

    const opt = document.createElement('input');
    opt.type = 'submit';
    form.appendChild(opt);
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  }
}

const download = new Download();
export default download;
