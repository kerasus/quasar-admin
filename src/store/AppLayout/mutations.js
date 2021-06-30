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

export function updateLayoutView (state, data) {
  state.layoutView = data
}

export function updateLayoutHeader (state, data) {
  state.layoutHeader = data
}

export function updateLayoutHeaderVisible (state, data) {
  state.layoutHeaderVisible = data
}

export function updateLayoutHeaderReveal (state, data) {
  state.layoutHeaderReveal = data
}

export function updateLayoutHeaderElevated (state, data) {
  state.layoutHeaderElevated = data
}

export function updateLayoutHeaderBordered (state, data) {
  state.layoutHeaderBordered = data
}

export function updateLayoutHeaderNacTabs (state, data) {
  state.layoutHeaderNacTabs = data
}

export function updateLayoutHeaderNacTabsModel (state, data) {
  state.layoutHeaderNacTabsModel = data
}

export function updateLayoutLeftDrawer (state, data) {
  state.layoutLeftDrawer = data
}

export function updateLayoutLeftDrawerVisible (state, data) {
  state.layoutLeftDrawerVisible = data
}

export function updateLayoutLeftDrawerBehavior (state, data) {
  state.layoutLeftDrawerBehavior = data
}

export function updateLayoutLeftDrawerOverlay (state, data) {
  state.layoutLeftDrawerOverlay = data
}

export function updateLayoutLeftDrawerElevated (state, data) {
  state.layoutLeftDrawerElevated = data
}

export function updateLayoutLeftDrawerBordered (state, data) {
  state.layoutLeftDrawerBordered = data
}

export function updateLayoutRightDrawer (state, data) {
  state.layoutRightDrawer = data
}

export function updateLayoutRightDrawerVisible (state, data) {
  state.layoutRightDrawerVisible = data
}

export function updateLayoutRightDrawerBehavior (state, data) {
  state.layoutRightDrawerBehavior = data
}

export function updateLayoutRightDrawerOverlay (state, data) {
  state.layoutRightDrawerOverlay = data
}

export function updateLayoutRightDrawerElevated (state, data) {
  state.layoutRightDrawerElevated = data
}

export function updateLayoutRightDrawerBordered (state, data) {
  state.layoutRightDrawerBordered = data
}

export function updateLayoutFooter (state, data) {
  state.layoutFooter = data
}

export function updateLayoutFooterVisible (state, data) {
  state.layoutFooterVisible = data
}

export function updateLayoutFooterReveal (state, data) {
  state.layoutFooterReveal = data
}

export function updateLayoutFooterElevated (state, data) {
  state.layoutFooterElevated = data
}

export function updateLayoutFooterBordered (state, data) {
  state.layoutFooterBordered = data
}
