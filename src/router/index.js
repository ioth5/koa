import Vue from 'vue'
import Router from 'vue-router'
//NProgress组件
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false });

// import home from '../components/home.vue'
// import login from '../components/login.vue'

Vue.use(Router);

// export default new Router({
//   routes: [{
//     path: '/',
//     component: home
//   },{
//     path: '/login',
//     component: login
//   }]
// });


// 默认路由表，不需要权限
const routes = [{
  path: '/',
  redirect: '/home'
},{
  path: '/defaultLayout',
  component: r => require.ensure([], () => r(require('../components/layout.vue')), 'layout'),
  children: [{
    path: '/home',
    component: r => require.ensure([], () => r(require('../page/home/index.vue')), 'home')
  },{
    path: '/activity',
    component: r => require.ensure([], () => r(require('../page/activity/index.vue')), 'activity')
  },{
    path: '/type',
    component: r => require.ensure([], () => r(require('../page/type/index.vue')), 'type')
  },{
    path: '/tools',
    component: r => require.ensure([], () => r(require('../page/tools/index.vue')), 'tools')
  },{
    path: '/member',
    component: r => require.ensure([], () => r(require('../page/member/index.vue')), 'member')
  },{
    path: '/help',
    component: r => require.ensure([], () => r(require('../page/help/index.vue')), 'help')
  }]
}
];
const router = new Router({
  mode: 'history',
  routes: routes
});

// 路由跳转前验证
router.beforeEach((to, from, next) => {
  // 开启进度条
  NProgress.start();
  next();
});

router.afterEach(transition => {
  // 结束进度条
  NProgress.done();
});

export default router
