export default function auth ({ next, store }) {
  console.log('midler ew')
  if (!store.getters['Auth/accessToken']) {
    return next({ name: 'login' })
  }
  return next()
}
