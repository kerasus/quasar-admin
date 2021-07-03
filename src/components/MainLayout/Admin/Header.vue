<template>

  <q-toolbar>
    <q-btn v-if="layoutLeftDrawer" dense flat round :icon="'menu'" @click="updateLayoutLeftDrawerVisible(!layoutLeftDrawerVisible)" />
    <q-toolbar-title>
      <q-avatar>
        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
      </q-avatar>
      Layout Builder
    </q-toolbar-title>
    <q-btn v-if="layoutRightDrawer" dense flat round :icon="'menu'" @click="updateLayoutRightDrawerVisible(!layoutRightDrawerVisible)" />
  </q-toolbar>

  <q-tabs v-if="layoutHeaderNacTabs" v-model="layoutHeaderNacTabsModel" align="left">
    <q-tab name="tab1" label="Tab One" />
    <q-tab name="tab2" label="Tab Two" />
    <q-tab name="tab3" label="Tab Three" />
  </q-tabs>

</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'

export default {
  name: 'Header',
  props: ['value'],
  computed: {
    ...mapGetters('AppLayout', [
      'layoutView',
      'layoutHeaderReveal',
      'layoutHeaderElevated',
      'layoutHeaderBordered',
      'layoutHeaderNacTabs',
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
      'layoutFooterBordered'
    ]),
    ...mapState('AppLayout', [
      'layoutHeader',
      'layoutHeaderNacTabsModel',
      'layoutFooter'
    ]),
    title () {
      return this.$store.getters['AppLayout/headerTitle']
    },
    showTitle () {
      return this.$store.getters['AppLayout/headerShowTitle']
    },
    showBtnSearch () {
      return this.$store.getters['AppLayout/headerShowBtnSearch']
    },
    showBtnBack () {
      return this.$store.getters['AppLayout/headerShowBtnBack']
    },
    showBtnShare () {
      return this.$store.getters['AppLayout/headerShowBtnShare']
    },
    titleCentered () {
      return this.$store.getters['AppLayout/headerTitleCentered']
    }
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapMutations('AppLayout', [
      'updateLayoutRightDrawerVisible',
      'updateLayoutLeftDrawerVisible'
    ]),
    goBack () {
      this.$router.go(-1)
    },
    toggleDrawer () {
      this.$emit('input', !this.value)
    }
  }
}
</script>

<style>
.app-header.title-in-center .q-toolbar__title {
  position: absolute;
  width: 100%;
  text-align: center;
}
</style>
