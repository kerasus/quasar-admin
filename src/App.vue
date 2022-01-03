<template>
  <div id="q-app">
    <router-view/>
  </div>
</template>
<script>
// import VuePageTransition from 'vue-page-transition'
import axios from 'axios'
import { AddressbarColor } from 'quasar'
// import Vue from 'vue'
//
// Vue.use(VuePageTransition)

export default {
  name: 'App',
  created () {
    // colors.setBrand('primary', '#30A180')
    AddressbarColor.set('primary')
    if (this.$store.getters['Auth/user']) {
      axios.defaults.headers.common.Authorization = this.$store.getters['Auth/tokenType'] + ' ' + this.$store.getters['Auth/accessToken']
    }
  }
}
</script>
