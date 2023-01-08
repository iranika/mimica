import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: 'mixn', component: () => import('pages/Mixn.vue') },
      { path: 'aegi', component: () => import('pages/Aegi.vue') },
      { path: 'bookmarklet', component: () => import('pages/Bookmarklet.vue') },
      { path: 'kc', component: () => import('pages/KConvert.vue') },
      { path: 'meditor', component: () => import('pages/MEditor.vue') },
      { path: 'signin', component: () => import('pages/Signin.vue') },
      { path: 'contact', component: () => import('pages/Contact.vue') },
      { path: 'renka', component: () => import('pages/Renka.vue') },
      { path: 'sdls',
        component: () => import('pages/SDLS.vue'),
        props: (route: { query: { link: string} }) => ({
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          url: route.query.link
        })
      }
      //{ path: 'pay', component: () => import('pages/pay.vue') }
    ],
  },
  {
    path: '/happy',
    component: ()=> import('layouts/HappyLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/happy/home.vue')
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
