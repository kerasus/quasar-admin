import axios from 'axios'
export function updateUser (state, data) {
  state.user = data
}
export function updateAccessToken (state, newInfo) {
  state.accessToken = newInfo
}

export function updateRedirectTo (state, newInfo) {
  state.redirectTo = newInfo
}
export function setAccessToken (newInfo) {
  axios.defaults.headers.common.Authorization = 'Bearer ' + newInfo
}
export function updateTokenType (state, data) {
  state.tokenType = data
}

export function updateTokenExpiresAt (state, data) {
  state.tokenExpiresAt = data
}
export function redirectToLogin (state, data) {
  this.$router.push({ name: 'login' })
}
export function redirectToHomePage (state, data) {
  this.$router.push({ name: 'Admin.User.Index' })
}
