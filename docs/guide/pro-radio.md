# ProRadio 单选

## 基本使用

```bash
<ProRadio
  options={[{label: '名称', value: 'name'},{label: '年龄', value: 'age'}]}>
</ProRadio>
```

## 自定义 options 中字段名

options 中默认字段名为 label 文本和 value 值，可使用 fieldNames 属性重新定义映射。

```bash
<ProRadio
  options={[{name: '名称', val: 'name'},{name: '年龄', val: 'age'}]}
  fieldNames={{label: 'name', value: 'val'}}>
</ProRadio>
```

## API

| 参数       | 说明                                    | 类型             | 默认值                        | 版本 |
| ---------- | --------------------------------------- | ---------------- | ----------------------------- | ---- |
| options    | 选项数据                                | {label, value}[] | -                             |      |
| fieldNames | 自定义 options 中 label 和 value 字段名 | object           | {label:`label`,value:`value`} |      |
