import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView  from '../views/LoginView.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: (to, from, next)=>{
      if(localStorage.getItem('token') != undefined){
        next();
      }else{
        next('/login');
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
    
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
