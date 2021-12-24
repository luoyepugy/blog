/*
 * @Author: 张晗
 * @Date: 2021-12-24 11:25:35
 * @LastEditors: 张晗
 * @LastEditTime: 2021-12-24 15:52:52
 * @Description: other其他
 */

/**
 * 查询url参数
 * @param name 需要查询的url的名称
 * @returns {string} url名称对应的值
 */
export const getUrlParams = (name?: string): string | object => {
  var hash = window.location.hash,
    index = hash.indexOf('?');
  var search =
      window.location.search || (index !== -1 ? hash.substr(index) : ''),
    o: any = {},
    item;
  if (search) {
    (search as any) = search.substr(1).split('&');
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
export function fieldMapping(
  id: string | number,
  array: Array<never>,
  fieldNames?: { name?: string; id?: string },
): string {
  let defaultFieldNames = {
    name: fieldNames?.name ?? 'name',
    id: fieldNames?.id ?? 'id',
  };
  let result: Array<string> = [],
    strArr = Array.isArray(id) ? id : [].concat([id as never]);

  for (let i of array) {
    if (~strArr.indexOf(i[defaultFieldNames.id])) {
      result.push(i[defaultFieldNames.name]);
    }
  }
  return result.join(',');
}
