<template>
  <div>
    <router-view :key="$route.name" />
  </div>
</template>

<script>
export default {
  name: 'UserContentsLayout'
}
</script>
