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
    />
  </div>
</template>

<script>
import inputMixin from 'components/FormBuiler/inputMixin'
export default {
  name: 'FormBuilderSlider',
  props: {
    value: {
      default: ''
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
