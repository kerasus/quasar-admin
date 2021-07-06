<template>
  <q-input @input="change($event)" v-model="inputData" :label="label" :disable="disable" />
</template>

<script>
import inputMixin from 'components/FormBuilder/inputMixin'
export default {
  name: 'FormBuilderInput',
  props: {
    value: {
      default: '',
      type: [String, Number]
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
