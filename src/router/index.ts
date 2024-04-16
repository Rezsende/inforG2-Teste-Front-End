import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView  from '../views/LoginView.vue'
import UsersView from '../views/UsersView.vue'
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
  {
    path: '/users',
    name: 'users',
     component: UsersView
    
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
