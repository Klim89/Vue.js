import Error404 from '@/views/Error404.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
import MarketView from '@/views/MarketView.vue';
import ProductDetails from '@/views/ProductDetails.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/market',
    name: 'market',
    component: MarketView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutUsView.vue'),
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../views/ContactsView.vue'),
  },
  {
    path: '/market/:id',
    component: ProductDetails,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error404',
    component: Error404,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
