# ProUploadFile 上传文件

## API

| 参数             | 说明                               | 类型           | 默认值                  | 版本 |
| ---------------- | ---------------------------------- | -------------- | ----------------------- | ---- |
| name             | 文件字段名                         | string         | `file`                  |      |
| extraParams      | 除文件字段名的额外参数             | object         | {}                      |      |
| placeholder      | 显示在文本框的默认提示文本         | string         | `请上传文件`            |      |
| format           | 文件支持格式                       | string         | `.xls,.xlsx`            |      |
| clearable        | 是否可清除                         | boolean        | `true`                  |      |
| url              | 上传接口路径                       | string         | -                       |      |
| isManualUpload   | 是否手动上传                       | boolean        | `false`                 |      |
| getFile          | 获取当前文件                       | (file) => void | -                       |      |
| defaultNameValue | 默认显示在文本框中的 name 和 value | object         | `{name: '', value: ''}` |      |
