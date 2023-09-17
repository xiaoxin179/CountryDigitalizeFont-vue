import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'index' }
    },
    {
      path: '/farmer',
      name: 'index',
      component: () => import('../views/farmer/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/login/register.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/farmer/aboutGuyu/about.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: () => import('../views/404.vue')
    },
    // 特色·商品交易路由
    {
      path: '/farmer/buy',
      redirect: { name: 'buy_firstPage' }
    },
    {
      path: '/farmer/buy',
      name: 'buy_home',
      component: () => import('../views/farmer/Buy/home.vue'),
      children: [
        {
          path: '/farmer/buy/about',
          name: 'buy_about',
          component: () => import('../views/farmer/Buy/about.vue')
        },
        {
          path: '/farmer/buy/firstpage',
          name: 'buy_firstPage',
          component: () => import('../views/farmer/Buy/Firstpage.vue')
        }, {
          path: '/farmer/buy/goods',
          name: 'Goods',
          component: () => import('../views/farmer/Buy/goods.vue')
        },
      ]

    },
    // 文化社区中的路由
    {
      path: '/farmer/cul',
      name: 'farmer-culture',
      redirect: '/farmer/cul/tscol',
      component: () => import('@/views/farmer/Culture/culture_index.vue'),
      children: [
        {
          path: '/farmer/cul/tscol',
          name: 'tscol',
          component: () => import('@/views/farmer/Culture/tsCol/main.vue')
        },
        {
          path: '/farmer/cul/sence',
          name: 'sence',
          component: () => import('@/views/farmer/Culture/scene/sence.vue')
        },
        {
          path: '/farmer/cul/person',
          name: 'person',
          component: () => import('@/views/farmer/Culture/Persion_Cul/person.vue')
        },
        {
          path: '/farmer/cul/activity',
          name: 'Activity',
          component: () => import('@/views/farmer/Culture/activity/main.vue')
        },
        {
          path: '/farmer/cul/chat',
          name: 'Chat',
          component: () => import('@/views/farmer/Culture/scene/chat.vue')
        }
      ]


    },
    // 生态区所有的路由
    {
      path: '/farmer/en',
      name: 'farmer-en',
      component: () => import('@/views/farmer/en/en_index.vue'),
      redirect: '/farmer/en/EnMessage',
      children: [
        {
          path: '/farmer/en/EnMessage',
          name: 'EnMessage',
          component: () => import('@/views/farmer/en/EnMessage/index.vue')
        },
        {
          path: '/farmer/en/EnCulMessage',
          name: 'EnCulMessage',
          component: () => import('@/views/farmer/en/EnCulMessage/index.vue')
        },
        {
          path: '/farmer/en/EnQiHou',
          name: 'EnQiHou',
          component: () => import('@/views/farmer/en/EnQiHou/index.vue')
        },
      ]
    },
    // 组织建设方面的路由
    {
      path: '/farmer/parts',
      name: 'farmer-parts',
      component: () => import('@/views/farmer/parts/parts_index.vue'),
      children: [

      ]
    },
    // 个人中心路由
    {
      path: '/farmer/person',
      name: 'com-person',
      component: () => import('../views/farmer/Person/Person.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  // 获取缓存的数据
  const store = useUserStore()
  const user = store.user
  const haveUser = user && user.id
  const noPermissionPahths = ['/login', '/register']
  if (!haveUser && !noPermissionPahths.includes(to.path)) {//用户没有登录
    next('/login')
  } else {
    next()
  }
})
export default router
