<template>
  <portlet v-model:value="filterInputs">
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
import { FormBuilder } from 'quasar-form-builder'

export default {
  name: 'Index',
  components: { EntityIndex, Portlet, FormBuilder },
  data () {
    return {
      filterInputs: [
        {
          type: 'Select',
          name: 'type',
          responseKey: '',
          label: ' نام کالایی که از خرید آن بن دریافت کرده است',
          col: 'col-md-6',
          options: [],
          optionValue: '',
          optionLabel: ''
        },
        {
          type: 'Select',
          name: 'couponStatus',
          label: ' وضعیت بن',
          col: 'col-md-6',
          options: [
            { id: '', value: 'فعال' },
            { id: '', value: 'باطل شده' },
            { id: '', value: 'استفاده شده' }
          ],
          optionValue: 'id',
          optionLabel: 'value'
        }
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
