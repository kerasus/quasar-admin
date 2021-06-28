export function updateLang (state, data) {
  state.lang = data
}

export function updateHeaderTitle (state, data) {
  let title = state.appName
  if (data) {
    title = data
  }
  state.headerTitle = title
}

export function updateHeaderWithBackground (state, data) {
  state.headerWithBackground = data
}

export function updateHeaderTitleCentered (state, data) {
  state.headerTitleCentered = data
}

export function updateHeaderShowTitle (state, data) {
  state.headerShowTitle = data
}

export function updateHeaderShowBtnSearch (state, data) {
  state.headerShowBtnSearch = data
}

export function updateHeaderShowBtnBack (state, data) {
  state.headerShowBtnBack = data
}

export function updateHeaderShowBtnShare (state, data) {
  state.headerShowBtnShare = data
}
