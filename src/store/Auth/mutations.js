export function updateUser (state, data) {
  state.user = data
}

export function updateToken (state, data) {
  state.token = data
}

export function updateTokenType (state, data) {
  state.tokenType = data
}

export function updateTokenExpiresAt (state, data) {
  state.tokenExpiresAt = data
}
