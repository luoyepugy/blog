# storage 本地存储

本地存储设置/获取方法调用。

## set 设置项

设置 localStorage 项。

```bash
Util.Storage.set('name', 'value')
```

### API

| 参数  | 是否必填 | 说明         | 类型   | 默认值 |
| ----- | -------- | ------------ | ------ | ------ | --- |
| name  | 必填     | 名称         | string | -      |
| value | 必填     | 名称对应的值 | string | object | -   |

## get 获取项

根据名称获取 localStorage 项。

```bash
Util.Storage.get('name') // => `value`
```

### API

| 参数 | 是否必填 | 说明 | 类型   | 默认值 |
| ---- | -------- | ---- | ------ | ------ |
| name | 必填     | 名称 | string | -      |

## remove 删除项

根据名称删除 storage 项。

```bash
Util.Storage.remove('name')
```

### API

| 参数 | 是否必填 | 说明     | 类型   | 默认值 |
| ---- | -------- | -------- | ------ | ------ |
| name | 必填     | 设置名称 | string | -      |

### setSession

第一个参数为存储的名称，第二个参数为存储的值，使用如下，即在 sessionStorage 里存储了一个字段名为`name`值为`value`的项。
若值为复杂数据类型，函数会使用 JSON.stringify 字符串化。

```bash
Util.Storage.setSession('name', 'value')

Util.Storage.setSession('isChecked', false)

Util.Storage.setSession('obj', {'a': 1, 'b': 2})

Util.Storage.setSession('arr', [1,2,3])
```

### getSession

参数为存储的名称，使用如下，即在 sessionStorage 里取出字段名为`name`的值，返回结果`value`
若值为复杂数据类型，函数使用 JSON.parse 解析。

```bash
Util.Storage.getSession('name') // => `value`

Util.Storage.getSession('isChecked') //  => false

Util.Storage.getSession('obj') //  => {'a': 1, 'b': 2}

Util.Storage.getSession('arr') //  => [1,2,3]
```
