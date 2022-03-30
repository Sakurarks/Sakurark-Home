module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: 'Sakurark',
    description: 'The homepage of Sakurark.',
  
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: 'https://img.sakurark.com/2022/03/JlXUDq.png',
    },
    themeConfig: {
        logo: 'https://img.sakurark.com/2022/03/iU4ezd.svg',
        navbar: [
          {
            text: 'API 文档',
            link: '/api/index.html',
          },
          {
            text: '关于',
            link: '/about.html',
          }
        ]
      }
}