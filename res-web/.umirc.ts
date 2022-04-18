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
        { path: '/video', component: '@/pages/content/center'},
        { path: '/video/:id', component: '@/pages/content/videoDetail'},
        { path: '/upload', component: '@/pages/content/upload'},
        { path: '/about', component: '@/pages/content/about'},
        { path: '/recommond', component: '@/pages/content/recommon'},
        { path: '/search/:key', component: '@/pages/content/search'},
        { path: '/login', component: '@/pages/content/login'},
        { path: '/register', component: '@/pages/content/register'},
      ],
    }, 
  ],
  fastRefresh: {},
});
