import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView  from '../views/LoginView.vue'
import UsersView from '../views/UsersView.vue'
import Pagina_oneView from '../views/Pagina_oneView.vue'
import Pagina_TwoView from '../views/Pagina_TwoView.vue'
import UltilitariosView from '../views/UltilitariosView.vue'
import Pagina_ThreeView from '../views/Pagina_ThreeView.vue'
import Pagina_fourView from '../views/Pagina_fourView.vue'
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
  {
    path:'/Pagina_oneView',
    name: 'Pagina_oneView',
    component: Pagina_oneView
  },
  {
    path:'/Pagina_TwoView',
    name: 'Pagina_TwoView',
    component: Pagina_TwoView
  },
  {
    path:'/Pagina_ThreeView',
    name: 'Pagina_ThreeView',
    component: Pagina_ThreeView
  },
  {
    path:'/Pagina_fourView',
    name: 'Pagina_fourView',
    component: Pagina_fourView
  },
  {
    path:'/UltilitariosView',
    name:'UltilitariosView',
    component: UltilitariosView
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
