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
    name: 'Home',
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
    name: 'Utilitários / Usuários',
     component: UsersView
    
  },
  {
    path:'/Pagina_oneView',
    name: 'Pagina 1',
    component: Pagina_oneView
  },
  {
    path:'/Pagina_TwoView',
    name: 'Pagina 2',
    component: Pagina_TwoView
  },
  {
    path:'/Pagina_ThreeView',
    name: 'Pagina 3',
    component: Pagina_ThreeView
  },
  {
    path:'/Pagina_fourView',
    name: 'Pagina 4',
    component: Pagina_fourView
  },
  {
    path:'/UltilitariosView',
    name:'Utilitários',
    component: UltilitariosView
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
