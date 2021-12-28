/*
 * @Author: 张晗
 * @Date: 2021-12-07 11:55:26
 * @LastEditors: 张晗
 * @LastEditTime: 2021-12-27 16:40:48
 * @Description:
 */
const fs = require('fs');
const path = require('path');

module.exports = {
  title: 'Pro Antd',
  description: 'Pro Ant Design Document',
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
        link: '/util/',
        target: '_self',
        rel: '',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: '组件',
          collapsable: false,
          // sidebarDepth: 2,
          children: [
            '',
            'getting-started',
            'pro-select',
            'pro-select-grid',
            'pro-radio',
            'pro-datepicker',
            'pro-upload-file',
            'pro-upload-img',
          ],
        },
      ],
      '/util/': [
        {
          title: '工具',
          collapsable: false,
          // sidebarDepth: 2,
          children: ['', 'storage', 'format', 'download', 'other'],
        },
      ],
    },
  },
};
