# ProSelect 下拉选择

## 基本使用

```bash
<ProSelect
  options={[{label: '名称', value: 'name'},{label: '年龄', value: 'age'}]}>
</ProSelect>
```

## 自定义 options 中字段名

options 中默认字段名为 label 文本和 value 值，可使用 fieldNames 属性重新定义映射。

```bash
<ProSelect
  options={[{name: '名称', val: 'name'},{name: '年龄', val: 'age'}]}
  fieldNames={{label: 'name', value: 'val'}}>
</ProSelect>
```

## 过滤搜索

配置 filterable 为`true`，使下拉框变成可过滤搜索模式，根据输入的值过滤出相匹配的 options 的 label 字段的集合列表

```bash
<ProSelect
  options={[{name: '名称', val: 'name'},{name: '年龄', val: 'age'}]}
  fieldNames={{label: 'name', value: 'val'}}
  filterable>
</ProSelect>
```

## 前置/后置标签

```bash
<ProSelect
  prefix="http://"
  suffix=".com">
</ProSelect>
```

## API

| 参数       | 说明                                    | 类型             | 默认值                        | 版本 |
| ---------- | --------------------------------------- | ---------------- | ----------------------------- | ---- |
| options    | 选项数据                                | {label, value}[] | -                             |      |
| fieldNames | 自定义 options 中 label 和 value 字段名 | object           | {label:`label`,value:`value`} |      |
| filterable | 可过滤搜索条件的                        | boolean          | false                         |      |
| prefix     | 带有前缀图标的 select                   | ReactNode        | -                             |      |
| suffix     | 带有后缀图标的 select                   | ReactNode        | -                             |      |
