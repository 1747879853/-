import Main from '@/components/Layout'
export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'login - 登录'
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    component: Main,
    redirect: '/home',

    children: [
      {
        path: '/home',
        name: 'grid',
        meta: {
          access: ['super_admin', 'admin']
        },
        component: () => import('@/components/grid/grid')
      },
      {
        path: '/check-car-table',
        name: 'carcheck',
        meta: {},
        component: () => import('@/components/check-car-table/cartable')
      },
      {
        path: '/fixcar',
        name: 'fixcar',
        component: () => import('@/components/fixcar/fixcar')
      },
      {
        path: '/checkbutton',
        name: 'checkbutton',
        component: () => import('@/components/checkbutton/checkbutton')
      },
      {
        path: '/cartable',
        name: 'cartable',
        component: () => import('@/components/table/cartable')
      },
      {
        path: '/outcartable',
        name: 'outcartable',
        component: () => import('@/components/table/outcartable')
      },
      {
        path: '/useradmin',
        meta: {
          access: ['super_admin']
        },
        name: 'useradmin',
        component: () => import('@/view/useradmin/useradmin')
      },
      {
        path: '/history',
        name: 'history',
        component: () => import('@/view/historymessage/historyview')
      },
      {
        path: '/uploadexcel',
        name: 'uploadexcel',
        component: () => import('@/view/uploadexcel/uploadexcel')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error/error401.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error/error404.vue')
  }
]

/*
/// /////////////////////////////
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

export default
  // mode: 'history',
  [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/Layout'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/Home')
        },
        {
          path: '/home',
          name: 'test',
          component: () => import('@/views/Home')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录'
      },
      component: () => import('@/views/Login')
    }
  ]
}
*/
