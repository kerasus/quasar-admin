<template>
  <div class="row">
    <div v-for="(input, inputIndex) in inputData" :key="inputIndex" class="q-pa-md" :class="(input.col) ? input.col : 'col'">
      <form-builder-input v-if="input.type === 'input'" @input="change($event, inputIndex)" v-model="input.value" :label="input.label" :disable="disable" />
      <form-builder-select v-if="input.type === 'select'" @input="change($event)" v-model="input.value" :options="input.options" :label="input.label" :disable="disable" />
      <form-builder-file v-if="input.type === 'file'" @input="change($event)" v-model="input.value" :label="input.label" :disable="disable" />
      <form-builder-option-group v-if="input.type === 'optionGroupRadio'" @input="change($event)" v-model="input.value" :options="input.options" :type="'radio'" :disable="disable" />
      <form-builder-option-group v-if="input.type === 'optionGroupCheckbox'" @input="change($event)" v-model="input.value" :options="input.options" :type="'checkbox'" :disable="disable" />
      <form-builder-option-group v-if="input.type === 'optionGroupToggle'" @input="change($event)" v-model="input.value" :options="input.options" :type="'toggle'" :disable="disable" />
      <form-builder-slider v-if="input.type === 'slider'" @input="change($event)" v-model="input.value" :min="input.min" :max="input.max" :label="input.label" :disable="disable" />
      <form-builder-range-slider v-if="input.type === 'rangeSlider'" @input="change($event)" v-model="input.value" :min="0" :max="50" :label="input.label" :disable="disable" />
      <form-builder-date-time v-if="input.type === 'dateMultipleRange'" @input="change($event)" v-model="input.value" :label="input.label" range multiple :disable="disable"/>
      <form-builder-date-time v-if="input.type === 'dateRange'" @input="change($event)" v-model="input.value" :label="input.label" range :disable="disable" />
      <form-builder-date-time v-if="input.type === 'dateTime'" @input="change($event)" v-model="input.value" :label="input.label" :disable="disable" />
      <form-builder-date-time v-if="input.type === 'time'" @input="change($event)" v-model="input.value" :label="input.label" time :disable="disable"/>
      <form-builder-avatar v-if="input.type === 'avatar'" :src="input.value" :size="input.size" :font-size="input.fontSize" :color="input.color" :text-color="input.textColor" :icon="input.icon"/>
    </div>
  </div>
</template>

<script>
import FormBuilderInput from 'components/FormBuiler/FormBuilderInput'
import FormBuilderSelect from 'components/FormBuiler/FormBuilderSelect'
import FormBuilderFile from 'components/FormBuiler/FormBuilderFile'
import FormBuilderOptionGroup from 'components/FormBuiler/FormBuilderOptionGroup'
import FormBuilderSlider from 'components/FormBuiler/FormBuilderSlider'
import FormBuilderRangeSlider from 'components/FormBuiler/FormBuilderRangeSlider'
import FormBuilderDateTime from 'components/FormBuiler/FormBuilderDateTime'
import inputMixin from 'components/FormBuiler/inputMixin'
import FormBuilderAvatar from 'components/FormBuiler/FormBuilderAvatar'
export default {
  name: 'FormBuilder',
  props: {
    value: {
      default: () => [],
      type: Array
    },
    disable: {
      default: false,
      type: Boolean
    }
  },
  components: { FormBuilderAvatar, FormBuilderDateTime, FormBuilderRangeSlider, FormBuilderSlider, FormBuilderOptionGroup, FormBuilderFile, FormBuilderSelect, FormBuilderInput },
  mixins: [inputMixin],
  methods: {
    change () {
      this.$emit('input', this.inputData)
    }
  }
}
</script>

<style scoped>

</style>
