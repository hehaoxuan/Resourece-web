import { defineConfig } from 'umi';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/App/index',
      routes: [
        { path: '/hot-video', component: '@/pages/content/pages/center/Index'},
        { path: '/hot-video/:id', component: '@/pages/content/pages/center/Index'},
        { path: '/upload', component: '@/pages/content/pages/upload/Index'},
        { path: '/about', component: '@/pages/content/pages/about/Index'},
        { path: '/recommond', component: '@/pages/content/pages/recommon/Index'},
        { path: '/search', component: '@/pages/content/pages/search/Index'},
      ],
    }, 
  ],
  fastRefresh: {},
});
