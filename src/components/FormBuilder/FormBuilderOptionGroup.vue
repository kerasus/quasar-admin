<template>
  <div>
    <q-option-group
      @input="change($event)"
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
      default: ''
    },
    color: {
      default: 'primary',
      type: String
    },
    type: {
      default: 'radio', // checkbox-toggle
      type: String
    },
    options: {
      default: () => [], // { label: 'Option 1', value: 'op1' }
      type: Array
    },
    inline: {
      default: true,
      type: Boolean
    },
    dense: {
      default: true,
      type: Boolean
    },
    disable: {
      default: false,
      type: Boolean
    }
  },
  methods: {

  },
  mixins: [inputMixin]
}
</script>

<style scoped>

</style>
