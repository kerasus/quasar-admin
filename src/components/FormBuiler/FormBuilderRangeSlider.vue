<template>
  <div>
    <q-badge color="secondary">
      {{ label }}: از {{ inputData.min }} تا {{ inputData.max }} ({{ min }} تا {{ max }})
    </q-badge>
    <q-range
      @input="change($event)"
      v-model="inputData"
      :min="min"
      :max="max"
    />
  </div>
</template>

<script>
import inputMixin from 'components/FormBuiler/inputMixin'
export default {
  name: 'FormBuilderRangeSlider',
  props: {
    value: {
      default: () => {
        return { min: 9, max: 35 }
      },
      type: Object
    },
    min: {
      default: 0,
      type: Number
    },
    max: {
      default: 100,
      type: Number
    },
    label: {
      default: '',
      type: String
    }
  },
  methods: {

  },
  mixins: [inputMixin]
}
</script>

<style scoped>

</style>
