export interface IStorage {
    /**
     * 根据名称获取localStorage数据
     *
     * @param name 名称
     * @returns 值
     */
    get(name: string): string | object;
    /**
     * 设置localStorage名称数据项
     *
     * @param name 名称
     * @param value 值
     */
    set(name: string, value: string | object): void;
    /**
     * 删除localStorage指定名称数据
     *
     * @param name 名称
     */
    remove(name: string): void;
}
declare class Storage implements IStorage {
    private storage;
    private encrypt;
    private decrypt;
    /**
     * 根据名称获取localStorage数据
     *
     * @param name 名称
     * @returns 值
     */
    get(name: string): string | object;
    /**
     * 设置localStorage名称数据项
     *
     * @param name 名称
     * @param value 值
     */
    set(name: string, value: string | object): void;
    /**
     * 删除localStorage指定名称数据
     *
     * @param name 名称
     */
    remove(name: string): void;
}
declare const storage: Storage;
export default storage;
