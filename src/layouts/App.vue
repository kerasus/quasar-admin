<template>
  <router-view />
</template>

<script>
export default {
  name: 'AppLayout',
  computed: {
    lang () {
      return this.$store.getters['AppLayout/lang']
    },
    langOptions () {
      return this.$store.getters['AppLayout/langOptions']
    }
  },
  created () {
    // this.$store.commit('AppLayout/updateLang', this.$q.lang.isoName)
    this.$store.commit('AppLayout/updateLang', this.lang)
  },
  watch: {
    lang (lang) {
      // dynamic import, so loading on demand only
      import(
        /* webpackInclude: /(de|en-us)\.js$/ */
        'quasar/lang/' + lang
      ).then(lang => {
        this.$q.lang.set(lang.default)
      })
    }
  }
}
</script>
