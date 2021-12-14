# ProSelectGrid 下拉选择网格

## 基本使用

```bash
const selectGridProps = {
  columns: [{
    title: '姓名',
    dataIndex: 'name'
  },{
    title: '地址',
    dataIndex: 'address'
  }],
  dataSource: [{
    id: 1,
    name: '张三',
    address: '上海',
  },{
    id: 2,
    name: '李四',
    address: '深圳',
  }]
}
<ProSelect.Grid
  {...selectGridProps}
  labelField='name'
  valueField='id'>
</ProSelect.Grid>
```

## 单选/多选

通过`type`配置下拉表格单选、多选模式，默认为多选 checkbox 模式。

```bash
<ProSelect.Grid type="radio">
</ProSelect.Grid>
```

## 远程请求

如果需要实时调用远程接口展示表格数据，可配置远程请求相关属性`remoteUrl`、`remoteParams`、`remoteSearchField`等。此时 dataSource 属性不会生效。

```bash
<ProSelect.Grid
  remoteUrl="http://www.baidu.com"
  remoteParams={{name: 'name'}}
  remoteSearchField="keyword">
</ProSelect.Grid>
```

## API

| 参数              | 说明                               | 类型                  | 默认值     | 版本 |
| ----------------- | ---------------------------------- | --------------------- | ---------- | ---- |
| columns           | 表格列的配置描述，具体项见下表     | ColumnsType[]         | -          |      |
| dataSource        | 表格数据数组                       | object[]              | -          |      |
| labelField        | 显示在选择框中的文本字段名         | string                | `name`     |      |
| valueField        | 与 formItem 的 name 绑定的值字段名 | string                | `id`       |      |
| type              | 表格单选/多选配置                  | 'radio' \| 'checkbox' | `checkbox` |      |
| remoteUrl         | 远程请求接口路径                   | string                | -          |      |
| remoteParams      | 远程请求接口参数                   | object                | `{}`       |      |
| remoteSearchField | 远程请求搜索字段名                 | string                | `keyword`  |      |

### columns

表格列的配置描述
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| ---------- | ---------------------------------- | ------------- | ------ | ----- |
| title | 列头显示文本 | string | - | |
| dataIndex | 列数据对应的唯一 key 字段名 | string | - | |
| width | 列宽度 | string | number | - | |
