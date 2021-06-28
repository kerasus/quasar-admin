<template>
  <q-select
    transition-show="jump-down"
    transition-hide="jump-up"
    :option-value="optionValue"
    :option-label="optionLabel"
    :option-disable="optionDisable"
    @input="change($event)"
    v-model="inputData"
    :options="filteredOptions"
    :label="label"
    use-input
    input-debounce="0"
    behavior="dialog"
    @filter="filterFn"
  >
    <template v-slot:no-option>
      <q-item>
        <q-item-section class="text-grey">
          موردی یافت نشد
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script>
import inputMixin from 'components/FormBuiler/inputMixin'
export default {
  name: 'FormBuilderSelect',
  props: {
    value: {
      default: '',
      type: String
    },
    options: {
      default: () => [],
      type: Array
    },
    optionValue: {
      default: 'value',
      type: String
    },
    optionLabel: {
      default: 'label',
      type: String
    },
    optionDisable: {
      default: 'disable',
      type: String
    },
    label: {
      default: '',
      type: String
    }
  },
  mixins: [inputMixin],
  data () {
    return {
      model: null,
      filteredOptions: this.options
    }
  },
  methods: {
    filterFn (val, update) {
      if (val === '') {
        update(() => {
          this.filteredOptions = this.options
        })
        return
      }

      update(() => {
        const needle = val.toLowerCase()
        this.filteredOptions = this.options.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    }
  }

}
</script>

<style scoped>

</style>
