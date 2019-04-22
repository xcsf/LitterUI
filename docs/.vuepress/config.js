module.exports = {
  base: '/LitterUI/',
  title: 'Litter UI',
  description: '一个没什么用的UI框架',
  themeConfig: {
    nav: [{
        text: '主页',
        link: '/'
      },
      {
        text: '文档',
        link: '/guide/'
      },
      {
        text: '交流',
        link: 'https://google.com'
      },
    ],
    sidebar: [{
        title: '入门',
        children: [
          '/install/',
          '/get-started/'
        ]
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/tabs',
          '/components/popover',
          '/components/cascader',
          '/components/collapse',
        ]
      },
    ]
  }
}