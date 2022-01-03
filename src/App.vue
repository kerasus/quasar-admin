<template>
  <div id="q-app">
    <router-view/>
  </div>
</template>
<script>
// import VuePageTransition from 'vue-page-transition'
import { AddressbarColor } from 'quasar'
// import Vue from 'vue'
//
// Vue.use(VuePageTransition)

export default {
  name: 'App',
  created () {
    // colors.setBrand('primary', '#30A180')
    AddressbarColor.set('primary')
  }
}
</script>
