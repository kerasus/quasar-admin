<template>
  <div>
    <q-badge color="secondary">
      {{ label }}: {{ inputData }} ({{ min }} تا {{ max }})
    </q-badge>
    <q-slider
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
  name: 'FormBuilderSlider',
  props: {
    value: {
      default: 0,
      type: Number
    }
  },
  methods: {

  },
  mixins: [inputMixin]
}
</script>

<style scoped>

</style>
