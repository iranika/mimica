import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: 'mixn', component: () => import('pages/Mixn.vue') },
      { path: 'bookmarklet', component: () => import('pages/Bookmarklet.vue') },
      //{ path: 'pay', component: () => import('pages/pay.vue') }
  ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
