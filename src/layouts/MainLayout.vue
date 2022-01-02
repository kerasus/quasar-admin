<template>
  <q-layout :view="layoutView">

    <q-header
      v-if="layoutHeader"
      v-model="layoutHeaderVisible"
      :reveal="layoutHeaderReveal"
      :elevated="layoutHeaderElevated"
      :bordered="layoutHeaderBordered"
    >
      <Header v-model:value="leftDrawerOpen" />
    </q-header>

    <q-page-container>
<!--      <vue-page-transition name="zoom">-->
        <!--      <transition appear enter-active-class="animated slideInRight" leave-active-class="animated slideOutLeft" mode="out-in">-->
        <router-view :key="$route.name" />
        <!--      </transition>-->
<!--      </vue-page-transition>-->
    </q-page-container>

    <q-drawer
      v-if="layoutLeftDrawerVisible"
      v-model="layoutLeftDrawerVisible"
      show-if-above
      :behavior="layoutLeftDrawerBehavior"
      :overlay="layoutLeftDrawerOverlay"
      :elevated="layoutLeftDrawerElevated"
      :bordered="layoutLeftDrawerBordered"
      content-class="bg-grey-1"
    >
      <q-scroll-area class="fit">
        <MainMenu />
      </q-scroll-area>
    </q-drawer>

    <q-drawer
      v-if="layoutRightDrawerVisible"
      v-model="layoutRightDrawerVisible"
      show-if-above
      :behavior="layoutRightDrawerBehavior"
      :overlay="layoutRightDrawerOverlay"
      :elevated="layoutRightDrawerElevated"
      :bordered="layoutRightDrawerBordered"
      side="right"
    >
      <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 204px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          <div class="text-weight-bold">Razvan Stoenescu</div>
          <div>@rstoenescu</div>
        </div>
      </q-img>
    </q-drawer>

    <q-footer
      v-if="layoutFooter"
      v-model="layoutFooterVisible"
      class="bg-grey-8"
      :reveal="layoutFooterReveal"
      :elevated="layoutFooterElevated"
      :bordered="layoutFooterBordered"
    >
      <q-toolbar>
        <q-btn v-if="layoutLeftDrawer" dense flat round :icon="'menu'" @click="updateLayoutLeftDrawerVisible(!layoutLeftDrawerVisible)" />

        <q-toolbar-title>Quasar</q-toolbar-title>

        <q-btn v-if="layoutRightDrawer" dense flat round :icon="'menu'" @click="updateLayoutRightDrawerVisible(!layoutRightDrawerVisible)" />
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
import MainMenu from 'components/MainLayout/Admin/MainMenu'
import Header from 'components/MainLayout/Admin/Header'

export default {
  name: 'MainLayout',
  components: { MainMenu, Header },
  computed: {
    ...mapGetters('AppLayout', [
      'layoutView',
      'layoutHeaderReveal',
      'layoutHeaderElevated',
      'layoutHeaderBordered',
      'layoutLeftDrawer',
      'layoutLeftDrawerVisible',
      'layoutLeftDrawerBehavior',
      'layoutLeftDrawerOverlay',
      'layoutLeftDrawerElevated',
      'layoutLeftDrawerBordered',
      'layoutRightDrawer',
      'layoutRightDrawerVisible',
      'layoutRightDrawerBehavior',
      'layoutRightDrawerOverlay',
      'layoutRightDrawerElevated',
      'layoutRightDrawerBordered',
      'layoutFooterReveal',
      'layoutFooterElevated',
      'layoutFooterBordered',
      'layoutFooter'
    ]),
    ...mapState('AppLayout', [
      'layoutHeader',
      'layoutHeaderVisible',
      'layoutFooterVisible'
    ]),
    headerWithBackground () {
      return this.$store.getters['AppLayout/headerWithBackground']
    }
  },
  data () {
    return {
      tab: 'home',
      leftDrawerOpen: false
    }
  },
  methods: {
    ...mapMutations('AppLayout', [
      'updateLayoutRightDrawerVisible',
      'updateLayoutLeftDrawerVisible'
    ])
  }
}
</script>

<style lang="scss">

</style>
