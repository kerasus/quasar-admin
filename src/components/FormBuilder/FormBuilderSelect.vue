<template>
  <q-select
    transition-show="jump-down"
    transition-hide="jump-up"
    :option-value="optionValue"
    :option-label="optionLabel"
    :option-disable="optionDisable"
    v-model="inputData"
    :options="filteredOptions"
    :label="label"
    :multiple="multiple"
    :use-chips="useChips"
    use-input
    input-debounce="500"
    :disable="disable"
    emit-value
    map-options
    clearable
    @input="change($event)"
    @new-value="createValue"
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
import inputMixin from 'components/FormBuilder/inputMixin'
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
    },
    multiple: {
      default: false,
      type: Boolean
    },
    useChips: {
      default: false,
      type: Boolean
    },
    createNewValue: {
      default: false,
      type: Boolean
    },
    disable: {
      default: false,
      type: Boolean
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
    },
    createValue (val, done) {
      if (!this.createNewValue) {
        return
      }
      // Calling done(var) when new-value-mode is not set or "add", or done(var, "add") adds "var" content to the model
      // and it resets the input textbox to empty string
      // ----
      // Calling done(var) when new-value-mode is "add-unique", or done(var, "add-unique") adds "var" content to the model
      // only if is not already set
      // and it resets the input textbox to empty string
      // ----
      // Calling done(var) when new-value-mode is "toggle", or done(var, "toggle") toggles the model with "var" content
      // (adds to model if not already in the model, removes from model if already has it)
      // and it resets the input textbox to empty string
      // ----
      // If "var" content is undefined/null, then it doesn't tampers with the model
      // and only resets the input textbox to empty string

      if (val.length > 0) {
        if (!this.filteredOptions.includes(val)) {
          this.filteredOptions.push(val)
        }
        done(val, 'toggle')
      }
    }
  }

}
</script>

<style scoped>

</style>
