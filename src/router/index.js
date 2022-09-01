import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Products from '../views/Products.vue';
import Product from '../views/Product.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Admin from '../views/Admin.vue';
import About from '../views/About.vue';
import Profile from '../views/Profile.vue';
import Contact from '../views/Contact.vue';
import Landing from '../views/Landing.vue';
import cart from '../components/Cart.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  },
  {
    path: '/products/:id',
    name: 'singleProduct',
    component: Product,
    props: true
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/landing',
    name: 'landing',
    component: Landing
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
