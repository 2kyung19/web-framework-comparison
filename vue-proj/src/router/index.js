import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import InfoItem from '@/views/InfoItem.vue';
import Error404 from '@/views/404Error.vue';
import HomeView from '../views/HomeView.vue';

// 로그인 안되어있으면 login 페이지로 redirect
const guardMyroute = (to, from, next) => {
  let isLogin = false;

  if (!localStorage.getItem('login')) isLogin = false;
  else isLogin = localStorage.getItem('login');

  if (isLogin === 'true') {
    next();
  } else {
    next('/login');
  }
};

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    beforeEnter: guardMyroute, // about 입장할 때 login 없으면
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/item/:id',
    name: 'item',
    component: InfoItem,
  },
  {
    path: '/404',
    name: '404',
    component: Error404,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// $router.push

export default router;
