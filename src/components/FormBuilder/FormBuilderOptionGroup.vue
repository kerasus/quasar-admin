<template>
  <div>
    <q-option-group
      @update:model-value="change($event)"
      v-model="inputData"
      :options="options"
      :color="color"
      :inline="inline"
      :dense="dense"
      :type="type"
      :disable="disable"
    />
  </div>
</template>

<script>
import inputMixin from 'components/FormBuilder/inputMixin'
export default {
  name: 'FormBuilderOptionGroup',
  props: {
    value: {
      default: '',
      type: [Object, String, Array, Number, Boolean]
    },
    options: {
      default: () => [], // { label: 'Option 1', value: 'op1' }
      type: Array
    }
  },
  methods: {

  },
  mixins: [inputMixin]
}
</script>

<style scoped>

</style>
