<template>
  <entity-show
    v-model:value="inputs"
    title="اطلاعات کاربر"
    :api="api"
    :entity-id-key="entityIdKey"
    :entity-param-key="entityParamKey"
    :edit-route-name="editRouteName"
    :index-route-name="indexRouteName"
  />
</template>

<script>
import EntityShow from 'components/Entity/Show/EntityShow'
export default {
  name: 'Show',
  components: { EntityShow },
  data () {
    return {
      expanded: true,
      api: '/alaa/api/v2/admin/product',
      entityIdKey: 'id',
      entityParamKey: 'id',
      editRouteName: 'Admin.Product.Edit',
      indexRouteName: 'Admin.Product.Index',
      inputs: [
        { type: 'avatar', name: 'photo', responseKey: 'data.photo', value: null, size: '250px', col: 'col-md-12' },
        { type: 'input', name: 'id', responseKey: 'data.id', value: 'null', label: 'شناسه', col: 'col-md-3' },
        { type: 'input', name: 'id', responseKey: 'data.id', value: 'null', label: 'شناسه محصول پرنت', col: 'col-md-3' },
        { type: 'input', name: 'title', responseKey: 'data.title', value: 'null', label: 'نام کالا', col: 'col-md-3' },
        { type: 'input', name: 'redirect_url', responseKey: 'data.redirect_url', value: 'null', label: 'آدرس ریدایرکت', col: 'col-md-3' },
        { type: 'select', name: 'redirect_code', responseKey: 'data.product_type.display_name', value: null, options: [{ label: '301 (دائمی)', value: 301 }, { label: '302 (موقتی)', value: 302 }], label: 'کد ریدایرکت', col: 'col-md-3' },
        { type: 'input', name: 'order', responseKey: 'data.order', value: 'null', label: 'ترتیب', col: 'col-md-3' },
        { type: 'input', name: 'intro_video', responseKey: 'data.intro.video', value: 'null', label: 'لینک فیلم معرفی', col: 'col-md-3' },
        { type: 'input', name: 'intro_photo', responseKey: 'data.intro.photo', value: 'null', label: 'تامبنیل کلیپ', col: 'col-md-3' },
        { type: 'input', name: 'base_price', responseKey: 'data.base_price', value: 'null', label: 'قیمت پایه', col: 'col-md-3' },
        { type: 'optionGroupToggle', name: 'is_free', options: [{ label: 'رایگان باشد', value: 1 }, { label: '', value: 0 }], responseKey: 'data.is_free', value: 'null', label: 'رایگان باشد', col: 'col-md-3' },
        { type: 'input', name: 'order', responseKey: 'data.order', value: 'null', label: 'ترتیب', col: 'col-md-3' },
        { type: 'input', name: 'order', responseKey: 'data.order', value: 'null', label: 'ترتیب', col: 'col-md-3' },

        { type: 'input', name: 'redirect_url', responseKey: 'data.redirect_url', value: 'null', label: 'نام', col: 'col-md-3' },
        { type: 'select', name: 'product_type', responseKey: 'data.product_type.display_name', value: null, options: [{ label: 'ساده', value: 1 }, { label: 'قابل انتخاب', value: 2 }, { label: 'قابل پیکربندی', value: 3 }], label: 'نوع محصول', col: 'col-md-3' },

        { type: 'input', name: 'price', responseKey: 'data.price.base', value: 'null', label: 'قیمت', col: 'col-md-3' }
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
