<template>
  <q-file @input="change($event)" v-model="inputData" :label="label" :disable="disable" />
</template>

<script>
import inputMixin from 'components/FormBuiler/inputMixin'
export default {
  name: 'FormBuilderFile',
  props: {
    value: {
      default: ''
    },
    label: {
      default: '',
      type: String
    },
    disable: {
      default: false,
      type: Boolean
    }
  },
  mixins: [inputMixin]
}
</script>

<style scoped>

</style>
