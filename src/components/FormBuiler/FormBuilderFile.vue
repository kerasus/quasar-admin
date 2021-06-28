<template>
  <q-file @input="change($event)" v-model="inputData" :label="label" />
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
    }
  },
  mixins: [inputMixin]
}
</script>

<style scoped>

</style>
