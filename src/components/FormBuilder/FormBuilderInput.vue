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
      type: [String, Number, Boolean]
    }
  },
  mixins: [inputMixin]
}
</script>

<style scoped>

</style>
