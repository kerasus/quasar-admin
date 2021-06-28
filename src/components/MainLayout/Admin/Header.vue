<template>
  <q-toolbar class="app-header" :class="{'title-in-center': titleCentered}">
    <q-btn
      v-if="false"
      flat
      dense
      round
      icon="menu"
      aria-label="Menu"
      @click="toggleDrawer"
    />
    <q-btn
      v-if="showBtnShare"
      flat
      dense
      round
      icon="share"
      aria-label="Menu"
    />
    <q-toolbar-title v-if="showTitle" class="text-center">
      {{ title }}
    </q-toolbar-title>
    <q-space />
    <q-btn
      v-if="showBtnBack"
      flat
      dense
      round
      icon="arrow_back"
      aria-label="Menu"
      @click="goBack"
    />
    <q-btn
      v-if="showBtnSearch"
      flat
      dense
      round
      icon="search"
      aria-label="Menu"
    />
    <div></div>
  </q-toolbar>
</template>

<script>
export default {
  name: 'Header',
  props: ['value'],
  computed: {
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
