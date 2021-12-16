/*
 * @Author: 张晗
 * @Date: 2017-09-19 01:45:42
 * @LastEditors: 张晗
 * @LastEditTime: 2021-12-16 14:11:05
 * @Description:
 */
const appLocaleData = require('react-intl/locale-data/en')

module.exports = {
  locale: 'en-US',
  data: appLocaleData,
  messages: {
    'app.header.search': 'Search...',
    'app.header.menu.home': 'Home',
    'app.header.menu.practice': 'Practice',
    'app.header.menu.components': 'Components',
    'app.header.menu.spec': 'Guidelines',
    'app.header.lang': '中文',
    'app.content.edit-page': 'Edit this page on GitHub!',
    'app.content.edit-demo': 'Edit this demo on GitHub!',
    'app.component.examples': 'Examples',
    'app.demo.copy': 'Copy code',
    'app.demo.copied': 'Copied!',
    'app.demo.codepen': 'Open in CodePen',
    'app.demo.riddle': 'Open in Riddle',

    'app.home.title': 'Pro Antd',
    'app.footer.links': 'Friends',
    'app.footer.community': 'Community',
  },
}
