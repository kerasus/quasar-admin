export default function auth ({ next, store }) {
  if (!store.getters['Auth/accessToken']) {
    store.commit('Auth/redirectToLogin')
    return next({ name: 'login' })
  }
  return next()
}
