<template>
  <q-input @input="change($event)" v-model="inputData" :label="label" />
</template>

<script>
import inputMixin from 'components/FormBuiler/inputMixin'
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
    }
  },
  mixins: [inputMixin]
}
</script>

<style scoped>

</style>
