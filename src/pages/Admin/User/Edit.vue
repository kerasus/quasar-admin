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
      api: '/reqres/api/users',
      entityIdKey: 'id',
      entityParamKey: 'id',
      showRouteName: 'Admin.User.Show',
      inputs: [
        { type: 'avatar', name: 'avatar', responseKey: 'data.avatar', value: null, size: '150px', col: 'col-md-12', disable: true },
        { type: 'input', name: 'id', responseKey: 'data.id', value: 'null', label: 'شناسه', col: 'col-md-3', disable: true },
        { type: 'input', name: 'first_name', responseKey: 'data.first_name', value: 'null', label: 'نام', col: 'col-md-3' },
        { type: 'input', name: 'last_name', responseKey: 'data.last_name', value: 'null', label: 'نام خانوادگی', col: 'col-md-3' },
        { type: 'input', name: 'email', responseKey: 'data.email', value: 'null', label: 'ایمیل', col: 'col-md-3' }
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
