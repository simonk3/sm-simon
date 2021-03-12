import Vue from 'vue'

export default async (_, inject) => {
  let sliceMachine = new Vue({
    methods: {
      resolver({ sliceName, i }) {
        return [ import(`/Users/simonk/my-new-nuxt-app/slices/${sliceName}.vue`), import(`/Users/simonk/my-new-nuxt-app/slices/${sliceName}/index.vue`), import(`/Users/simonk/my-new-nuxt-app/slices/${sliceName}/index.js`), import(`/Users/simonk/my-new-nuxt-app/slices/${sliceName}/${sliceName}.vue`),import(`vue-essential-slices/src/slices/${sliceName}.vue`), import(`vue-essential-slices/src/slices/${sliceName}/index.vue`), import(`vue-essential-slices/src/slices/${sliceName}/index.js`), import(`vue-essential-slices/src/slices/${sliceName}/${sliceName}.vue`) ]
      }
    }
  })
  inject('sliceMachine', sliceMachine);
}
