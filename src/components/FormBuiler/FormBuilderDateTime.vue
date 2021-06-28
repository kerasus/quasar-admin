<template>
  <div>
    <q-input filled @input="change($event)" v-model="outputText" dir="ltr" readonly :disable="disable">
      <template v-if="canShowDate" v-slot:prepend>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-date v-model="inputData" calendar="persian" :mask="mask" :range="range" :multiple="multiple" :disable="disable">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="بستن" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
      <template v-if="canShowTime" v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-time v-model="inputData" :mask="mask" format24h :disable="disable">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="بستن" color="primary" flat />
              </div>
            </q-time>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
import inputMixin from 'components/FormBuiler/inputMixin'
export default {
  name: 'FormBuilderDateTime',
  props: {
    value: {
      default: '',
      type: [String, Array]
    },
    time: {
      default: false,
      type: Boolean
    },
    range: {
      default: false,
      type: Boolean
    },
    multiple: {
      default: false,
      type: Boolean
    },
    disable: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    canShowTime () {
      return (!this.range && !this.multiple)
    },
    canShowDate () {
      return (!this.time)
    },
    mask () {
      if (this.canShowTime && this.canShowDate) {
        return 'YYYY-MM-DD HH:mm'
      } else if (this.canShowTime && !this.canShowDate) {
        return 'HH:mm'
      } else if (!this.canShowTime && this.canShowDate) {
        return 'YYYY-MM-DD'
      } else {
        return ''
      }
    },
    outputText () {
      if (Array.isArray(this.inputData)) {
        let ranges = this.inputData.map(item => {
          if (item.from) {
            return ('(' + item.from + '-' + item.to + ')')
          } else {
            return ('(' + item + ')')
          }
        })
        ranges = ranges.join(', ')

        return ranges
      } else if (this.inputData.from) {
        return ('(' + this.inputData.from + '-' + this.inputData.to + ')')
      }

      return this.inputData
    }
  },
  methods: {

  },
  mixins: [inputMixin]
}
</script>

<style scoped>

</style>
