import axios from 'axios'
import API_ADDRESS from 'src/api/Addresses'
export function login2 (context, data) {
  return new Promise((resolve, reject) => {
    axios.post(API_ADDRESS.auth.login, {
      mobile: data.username,
      password: data.password
    })
      .then((response) => {
        const user = response.data.data.user,
          token = response.data.data.access_token,
          tokenType = response.data.data.token_type,
          tokenExpiresAt = response.data.data.token_expires_at
        context.commit('updateUser', user)
        context.commit('updateToken', token)
        context.commit('updateTokenType', tokenType)
        context.commit('updateTokenExpiresAt', tokenExpiresAt)
        axios.defaults.headers.common.Authorization = tokenType + ' ' + token
        resolve(response)
      })
      .catch((error) => {
        axios.defaults.headers.common.Authorization = null
        context.commit('updateUser', null)
        context.commit('updateToken', null)
        context.commit('updateTokenType', null)
        reject(error)
      })
  })
}
export function login (context, data) {
  return axios.post(API_ADDRESS.auth.login, data)
    .then(res => {
      const accessToken = res.data.data.access_token
      context.commit('updateAccessToken', accessToken)
      context.commit('updateUser', res.data.data.user)
      context.commit('setAccessToken', accessToken)
    })
}
export function logout (context) {
  context.commit('updateAccessToken', null)
  context.commit('updateUser', null)
  context.commit('updateToken', null)
  context.commit('updateTokenType', null)
  context.commit('redirectToLogin')
}
