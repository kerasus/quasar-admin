import languages from 'quasar/lang/index.json'
const appLanguages = languages.filter(lang =>
  ['fa', 'en-us'].includes(lang.isoName)
)

export default function () {
  return {
    layoutView: 'lHh Lpr lFf',
    layoutHeader: true,
    layoutHeaderVisible: true,
    layoutHeaderReveal: false,
    layoutHeaderElevated: false,
    layoutHeaderBordered: false,

    layoutHeaderNavTabs: true,
    layoutHeaderNavTabsModel: 1,

    layoutLeftDrawer: false,
    layoutLeftDrawerVisible: true,
    layoutLeftDrawerBehavior: 'default',
    layoutLeftDrawerOverlay: false,
    layoutLeftDrawerElevated: false,
    layoutLeftDrawerBordered: false,

    layoutRightDrawer: false,
    layoutRightDrawerVisible: false,
    layoutRightDrawerBehavior: 'default',
    layoutRightDrawerOverlay: false,
    layoutRightDrawerElevated: false,
    layoutRightDrawerBordered: false,

    layoutFooter: true,
    layoutFooterVisible: true,
    layoutFooterReveal: false,
    layoutFooterElevated: false,
    layoutFooterBordered: false,

    appName: 'app',
    headerTitle: 'app',
    headerWithBackground: false,
    headerTitleCentered: false,
    headerShowTitle: true,
    headerShowBtnSearch: true,
    headerShowBtnBack: false,
    headerShowBtnShare: false,
    lang: 'fa',
    langOptions: appLanguages.map(lang => ({
      label: lang.nativeName, value: lang.isoName
    }))
  }
}
