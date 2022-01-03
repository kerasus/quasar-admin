<template>
  <portlet>
    <template #title>
      جدول فیلتر
    </template>
    <template #toolbar>
      <q-btn flat round icon="add">
        <q-tooltip>
          اضافه کردن
        </q-tooltip>
      </q-btn>
    </template>
    <template #content>
      <q-card class="category-card">
        <form-builder v-model:value="filterInputs"/>
      </q-card>
    </template>
  </portlet>
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
import { EntityIndex, Portlet } from 'quasar-crud'

export default {
  name: 'Index',
  components: { EntityIndex, Portlet },
  data () {
    return {
      filterInputs: [
        { type: 'Input' }
      ],
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
