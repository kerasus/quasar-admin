<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import EssentialLink from 'components/EssentialLink.vue'

export default {
  name: 'AuthLayout',
  // components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
