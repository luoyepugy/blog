# 其他

## 字段映射

```bash
Util.fieldMapping(1,
  [
    { a: 'hello1', key: 1 },
    { a: 'aaa', key: 2 },
    { a: 'hello23', key: 1 },
  ],
  { name: 'a', id: 'key' }
)
```

### API

| 参数       | 是否必填 | 说明                                  | 类型   | 默认值                   |
| ---------- | -------- | ------------------------------------- | ------ | ------------------------ |
| id         | 必填     | 值                                    | number | -                        |
| array      | 必填     | 映射数组                              | Array  | -                        |
| fieldNames | 选填     | 自定义 array 数组中 name 和 id 字段名 | object | {name: 'name', id: 'id'} |

## 解析 url 查询参数

默认返回 url 所有查询参数对象，若传入 name 参数字段，返回指定 name 字段参数值

```bash
Util.getUrlParams()
```

### API

| 参数 | 是否必填 | 说明              | 类型   | 默认值 |
| ---- | -------- | ----------------- | ------ | ------ |
| name | 选填     | 指定查询 url 名称 | string | -      |
