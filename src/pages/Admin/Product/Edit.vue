<template>
  <entity-edit
    v-model:value="inputs"
    title="اطلاعات کاربر"
    :api="api"
    :entity-id-key="entityIdKey"
    :entity-param-key="entityParamKey"
    :show-route-name="showRouteName"
  />
</template>

<script>
import EntityEdit from 'components/Entity/Edit/EntityEdit'
export default {
  name: 'Edit',
  components: { EntityEdit },
  data () {
    return {
      expanded: true,
      api: '/alaa/api/v2/admin/product',
      entityIdKey: 'id',
      entityParamKey: 'id',
      showRouteName: 'Admin.Product.Show',
      inputs: [
        { type: 'avatar', name: 'photo', responseKey: 'data.photo', value: null, size: '250px', col: 'col-md-12', disable: true },
        { type: 'input', name: 'id', responseKey: 'data.id', value: 'null', label: 'شناسه', col: 'col-md-3', disable: true },
        { type: 'input', name: 'title', responseKey: 'data.title', value: 'null', label: 'نام', col: 'col-md-3' },
        // { type: 'input', name: 'product_type', responseKey: 'data.product_type.display_name', value: 'null', label: 'نوع محصول', col: 'col-md-3' },
        { type: 'select', name: 'product_type', responseKey: 'data.product_type.display_name', value: null, options: [{ label: 'ساده', value: 1 }, { label: 'قابل انتخاب', value: 2 }, { label: 'قابل پیکربندی', value: 3 }], label: 'نوع محصول', col: 'col-md-3' },
        { type: 'input', name: 'price', responseKey: 'data.price.base', value: 'null', label: 'ایمیل', col: 'col-md-3' }
      ]
    }
  },
  created () {
    this.api += '/' + this.$route.params.id
  }
}
</script>

<style scoped>

</style>
