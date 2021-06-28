<template>
  <q-layout view="lHh Lpr lFf">
    <q-header :class="{'register-session': headerWithBackground}">
      <Header v-model="leftDrawerOpen" />
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      content-class="bg-grey-1"
    >
      <MainMenu />
    </q-drawer>
    <q-page-container>
      <vue-page-transition name="zoom">
<!--      <transition appear enter-active-class="animated slideInRight" leave-active-class="animated slideOutLeft" mode="out-in">-->
        <router-view :key="$route.name" />
<!--      </transition>-->
      </vue-page-transition>
    </q-page-container>
    <q-footer>

    </q-footer>
  </q-layout>
</template>

<script>
import MainMenu from 'components/MainLayout/Admin/MainMenu'
import Header from 'components/MainLayout/Admin/Header'

export default {
  name: 'MainLayout',
  components: { MainMenu, Header },
  computed: {
    headerWithBackground () {
      return this.$store.getters['AppLayout/headerWithBackground']
    }
  },
  data () {
    return {
      tab: 'home',
      leftDrawerOpen: false
    }
  }
}
</script>

<style lang="scss">

</style>
