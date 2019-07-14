import Types from '../views/types/index.vue';

const routes: any[] = [
  {
    path: '/',
    name: 'types',
    component: Types,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];
export default routes;
