# storage 本地存储

本地存储设置/获取方法调用。

### set

第一个参数为存储的名称，第二个参数为存储的值，使用如下，即在 localStorage 里存储了一个字段名为`name`值为`value`的项。
若值为复杂数据类型，函数会使用 JSON.stringify 字符串化。

```bash
Util.Storage.set('name', 'value')

Util.Storage.set('isChecked', false)

Util.Storage.set('obj', {'a': 1, 'b': 2})

Util.Storage.set('arr', [1,2,3])
```

### get

参数为存储的名称，使用如下，即在 localStorage 里取出字段名为`name`的值，返回结果`value`
若值为复杂数据类型，函数使用 JSON.parse 解析。

```bash
Util.Storage.get('name') // => `value`

Util.Storage.get('isChecked') //  => false

Util.Storage.get('obj') //  => {'a': 1, 'b': 2}

Util.Storage.get('arr') //  => [1,2,3]
```

### remove

删除 storage 项，传入指定项名称。

```bash
Util.Storage.remove('name')
Util.Storage.get('name') // => ''
```

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
