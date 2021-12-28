export interface IOther {
    /**
     * 获取url的查询参数
     *
     * @param name 指定查询url名称
     * @returns 指定name对应的值或所有url参数对象
     */
    getUrlParams(name?: string): string | object;
    /**
     * 字段映射，根据字段值返回字段映射数组中对应的名称
     *
     * @param id 值
     * @param array 映射数组，默认字段名称是[{name: '', id: ''}]
     * @param fieldNames 自定义映射数组的id/name字段名称
     * @returns name 映射数组值对应的名称
     */
    fieldMapping(id: string | number, array: Array<any>, fieldNames?: {
        name?: string;
        id?: string;
    }): string;
}
declare class Other implements IOther {
    /**
     * 查询url参数
     * @param name 需要查询的url的名称
     * @returns {string} url名称对应的值
     */
    getUrlParams(name?: string): string | object;
    /**
     * 字段映射，根据字段值返回字段映射数组中对应的名称
     *
     * @param id 值
     * @param array 映射数组，默认字段名称是[{name: '', id: ''}]
     * @param fieldNames 自定义映射数组的id/name字段名称
     * @returns name 映射数组值对应的名称
     */
    fieldMapping(id: string | number, array: Array<any>, fieldNames?: {
        name?: string;
        id?: string;
    }): string;
}
declare const other: Other;
export default other;
