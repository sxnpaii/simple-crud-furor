import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'homepage',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: '/admin',
        name: 'adminpage',
        component: () => import('pages/AdminPage.vue'),
      },
      {
        path: '/products',
        name: 'allproducts',
        component: () => import('pages/ProductsPage/ProductsPage.vue'),
      },
      {
        path: '/products/:id',
        name: 'product',
        component: () => import('pages/ProductsPage/OneProduct.vue'),
      },
    ],
  },
];

export default routes;
