/*
 * @Author: 张晗
 * @Date: 2021-12-22 12:31:48
 * @LastEditors: 张晗
 * @LastEditTime: 2021-12-24 15:52:46
 * @Description: Storage本地存储
 */

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

class Storage implements IStorage {
  private storage: any = localStorage;

  // 加密
  private encrypt(value: string) {
    let encryptValue = new String(),
      mask,
      maskValue;
    for (let i = 0, len = value.length; i < len; i++) {
      mask = Math.round(Math.random() * 111) + 77;
      maskValue = value.charCodeAt(i) + mask;
      mask += i;
      encryptValue += String.fromCharCode(maskValue, mask);
    }
    return encryptValue;
  }

  // 解密
  private decrypt(value: any) {
    let decryptValue = '',
      k = 0,
      v,
      m;
    let decrypt = function (v: any, m: any, i: number) {
      v = v.charCodeAt(0);
      m = m.charCodeAt(0);
      m -= i;
      v -= m;
      return String.fromCharCode(v);
    };
    for (let i = 0, len = value.length; i < len; i++) {
      if (!(i % 2)) {
        v = value[i];
      } else {
        m = value[i];
        decryptValue += decrypt(v, m, k);
        k++;
      }
    }
    return decryptValue;
  }

  /**
   * 根据名称获取localStorage数据
   *
   * @param name 名称
   * @returns 值
   */
  get(name: string): string | object {
    const value = this.storage.getItem(name);
    return value ? JSON.parse(this.decrypt(value)) : value;
  }

  /**
   * 设置localStorage名称数据项
   *
   * @param name 名称
   * @param value 值
   */
  set(name: string, value: string | object): void {
    this.storage.setItem(
      name,
      value ? this.encrypt(JSON.stringify(value)) : value,
    );
  }

  /**
   * 删除localStorage指定名称数据
   *
   * @param name 名称
   */
  remove(name: string): void {
    this.storage.removeItem(name);
  }
}
const storage = new Storage();

export default storage;
