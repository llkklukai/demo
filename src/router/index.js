import Vue from 'vue'
import Router from 'vue-router'
import Register  from '../page/Register'
import Login from "../page/Login"
import test from "../page/test"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },{
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
