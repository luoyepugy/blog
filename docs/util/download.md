# download 下载

## 通过`a`标签

```bash
Util.Download.getByA('/url')
```

### API

| 参数   | 是否必填 | 说明          | 类型   | 默认值 |
| ------ | -------- | ------------- | ------ | ------ |
| url    | 必填     | 接口 url 地址 | string | -      |
| params | 选填     | 接口参数对象  | object | {}     |
| name   | 选填     | 文件名称      | string | '下载' |

## 通过`Form`表单

参数为下载文件的自定义名字

```bash
Util.Download.getByForm('/url')
```

| 参数   | 是否必填 | 说明             | 类型   | 默认值 |
| ------ | -------- | ---------------- | ------ | ------ |
| url    | 必填     | 接口 url 地址    | string | -      |
| params | 选填     | 接口参数对象     | object | {}     |
| target | 选填     | 目标 iframe 名称 | string | -      |
