import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _327f0d90 = () => interopDefault(import('./prismic/pages/preview.vue' /* webpackChunkName: "" */))
const _2038f84a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _e746bbd0 = () => interopDefault(import('../pages/_uid.vue' /* webpackChunkName: "pages/_uid" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/preview",
    component: _327f0d90,
    name: "prismic-preview"
  }, {
    path: "/preview",
    component: _327f0d90,
    name: "prismic-preview"
  }, {
    path: "/",
    component: _2038f84a,
    name: "index"
  }, {
    path: "/:uid",
    component: _e746bbd0,
    name: "uid"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
