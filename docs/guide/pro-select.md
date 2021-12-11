# ProSelect 下拉选择

## 基本使用

```bash
<ProSelect
  options={[{label: '名称', value: 'name'},{label: '年龄', value: 'age'}]}>
</ProSelect>
```

## 自定义 options 中字段名

```bash
<ProSelect
  options={[{name: '名称', val: 'name'},{name: '年龄', val: 'age'}]}
  fieldNames={{label: 'name', value: 'val'}}>
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

| 参数       | 说明                                    | 类型             | 默认值                        | 版本  |
| ---------- | --------------------------------------- | ---------------- | ----------------------------- | ----- |
| options    | 选项数据                                | {label, value}[] | -                             | 0.1.0 |
| fieldNames | 自定义 options 中 label 和 value 字段名 | object           | {label:`label`,value:`value`} | 0.1.0 |
| prefix     | 带有前缀图标的 select                   | ReactNode        | -                             | 0.1.0 |
| suffix     | 带有后缀图标的 select                   | ReactNode        | -                             | 0.1.0 |
