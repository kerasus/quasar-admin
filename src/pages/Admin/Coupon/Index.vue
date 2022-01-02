<template>
<entity-index
  v-model:value="inputs"
  title="لیست بن ها"
  :api="api"
  :table="table"
  :table-keys="tableKeys"
  :create-route-name="createRouteName">
</entity-index>
</template>

<script>
import { EntityIndex } from 'quasar-crud'

export default {
  name: 'Index',
  components: { EntityIndex },
  data () {
    return {
      inputs: [],
      api: 'v2/admin/coupon',
      table: [],
      tableKeys: [],
      createRouteName: 'Admin.Coupon.Create'
    }
  }
}
</script>

<style scoped>

</style>
