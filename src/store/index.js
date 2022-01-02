import AppLayout from './AppLayout'
import Auth from './Auth'
import createPersistedState from 'vuex-persistedstate'
import { createStore } from 'vuex'
import { store } from 'quasar/wrappers'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      AppLayout,
      Auth
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING,
    plugins: [
      createPersistedState({
        storage: window.localStorage,
        paths: ['Auth.accessToken', 'Auth.user', 'psychometricAnswer']
      })]
  })

  return Store
})
