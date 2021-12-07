/*
 * @Author: 张晗
 * @Date: 2021-12-07 11:55:26
 * @LastEditors: 张晗
 * @LastEditTime: 2021-12-07 14:39:58
 * @Description:
 */
module.exports = {
  title: 'Pro Antd',
  description: 'Pro Antd Docment',
  markdown: {
    lineNumbers: true,
    toc: {
      includeLevel: [1, 2, 3],
    },
  },
  themeConfig: {
    displayAllHeaders: true,
    // logo: '/assets/img/logo.png',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '文档',
        link: '/guide/',
        target: '_self',
        rel: '',
      },
      {
        text: '工具',
        link: '/tool/',
        target: '_blank',
        rel: '',
      },
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  },
}
