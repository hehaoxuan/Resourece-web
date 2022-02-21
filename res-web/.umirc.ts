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
        { path: '/hot-video', component: '@/pages/Content/Center/Index'},
        { path: '/upload', component: '@/pages/Content/Upload/Index'},
        { path: '/about', component: '@/pages/Content/About/Index'},
        { path: '/recommond', component: '@/pages/Content/Recommon/Index'},
        { path: '/search', component: '@/pages/Content/Search/Index'},
      ],
    }, 
  ],
  fastRefresh: {},
});
