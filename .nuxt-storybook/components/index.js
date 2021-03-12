export { default as Logo } from '../../components/Logo.vue'
export { default as Menu } from '../../components/menu.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyMenu = import('../../components/menu.vue' /* webpackChunkName: "components/menu" */).then(c => c.default || c)
