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
      :disable="disable"
    />
  </div>
</template>

<script>
import inputMixin from 'components/FormBuilder/inputMixin'
export default {
  name: 'FormBuilderRangeSlider',
  props: {
    value: {
      default: () => {
        return { min: 9, max: 35 }
      },
      type: Object
    }
  },
  methods: {

  },
  mixins: [inputMixin]
}
</script>

<style scoped>

</style>
