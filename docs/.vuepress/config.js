module.exports = {
  title: 'Kyrie', //标题
  keywords: '前端开发',
  description: '前端开发',
  repo: '', //仓库地址
  base: '/myblog/', // 配合部署项目
  port: 3000,
  head: [['link', { rel: 'icon', href: '/img/favicon.ico' }]],
  lastUpdated: 'Last Updated',
  plugins: [
    ['flexsearch'],
    // other plugins
  ],
  themeConfig: {
    //主题配置
    logo: '/img/avatar.jpg',
    nav: [
      //导航栏
      { text: '首页', link: '/' },
      { text: 'CSS', link: '/css_docs/' },
      { text: 'JS', link: '/js_docs/' },
      { text: 'Vue', link: '/vue_docs/' },
      { text: 'React', link: '/react_docs/' },
      { text: '生活测试', link: '/life/' },
    ],
    sidebar: {
      //侧边拦
      '/css_docs/': ['css居中小技巧'],
      '/js_docs/': [
        '阿里移动端适配',
        '函数柯里化',
        '深拷贝的实现',
        '微信公众号获取手机经纬度',
        'MVX框架模式了解',
        'setTimeout传递参数问题',
      ],
      '/vue_docs/': ['vue笔记', 'vue-key属性的作用', 'vue+axios实现http拦截及路由拦截'],
      '/react_docs/': ['react笔记'],
      '/life/': [
        {
          title: '生活测试',
          collapsable: false,
          children: [
            { title: '生活测试01', path: 'life01' },
            { title: '生活测试02', path: 'life02' },
            { title: '生活测试03', path: 'life03' },
          ],
        },
      ],
    },
  },
};
