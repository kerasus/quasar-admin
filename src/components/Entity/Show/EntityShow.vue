<template>
  <portlet ref="portlet">
    <template v-slot:title>
      {{ title }}
    </template>
    <template v-slot:toolbar>
      <q-btn flat round icon="cached" @click="getData()">
        <q-tooltip>
          بارگذاری مجدد
        </q-tooltip>
      </q-btn>
      <q-btn flat round :icon="(expanded) ? 'expand_less' : 'expand_more'" @click="expanded = !expanded">
        <q-tooltip>
          <span v-if="expanded">عدم نمایش فرم</span>
          <span v-else>نمایش فرم</span>
        </q-tooltip>
      </q-btn>
      <q-btn flat round icon="settings">
        <q-tooltip>
          تنظیمات
        </q-tooltip>
      </q-btn>
    </template>
    <template v-slot:content>
      <q-expansion-item v-model="expanded">
        <form-builder v-model="inputData" />
        <q-inner-loading :showing="loading">
          <q-spinner-ball color="primary" size="50px" />
        </q-inner-loading>
      </q-expansion-item>
    </template>
  </portlet>
</template>

<script>
import Portlet from 'components/Portlet'
import inputMixin from 'components/FormBuiler/inputMixin'
import FormBuilder from 'components/FormBuiler/FormBuilder'
import axios from 'axios'

export default {
  name: 'EntityShow',
  props: {
    value: {
      default: () => [],
      type: Array
    },
    title: {
      default: '',
      type: String
    },
    api: {
      default: '',
      type: String
    },
    table: {
      default: () => {
        return {
          columns: [],
          data: []
        }
      },
      type: Object
    }
  },
  plugins: [
    'AddressbarColor'
  ],
  mixins: [inputMixin],
  components: { Portlet, FormBuilder },
  data () {
    return {
      expanded: true,
      loading: false
    }
  },
  created () {
    this.getData()
  },
  methods: {
    toggleFullscreen () {
      const target = this.$refs.portlet
      this.$q.fullscreen.toggle(target)
        .then(() => {
          // success!
        })
        .catch((err) => {
          alert(err)
          // uh, oh, error!!
          // console.error(err)
        })
    },
    getData () {
      this.loading = true
      axios.get(this.api)
        .then(response => {
          this.loadInputData(response.data)
          this.loading = false
        })
    },
    loadInputData (responseData) {
      this.inputData.forEach(input => {
        input.value = this.getValidChainedObject(responseData, input.responseKey.split('.'))
      })
      this.change(this.inputData)
    },
    getValidChainedObject (object, keys) {
      if (keys.length === 1) {
        if (typeof object[keys[0]] !== 'undefined' && object[keys[0]] !== null) {
          return object[keys[0]]
        }
        return false
      }

      if (typeof object[keys[0]] !== 'undefined' && object[keys[0]] !== null) {
        return this.getValidChainedObject(object[keys[0]], keys.splice(1))
      }

      return (typeof object[keys[0]] !== 'undefined' && object[keys[0]] !== null)
    }
  }
}
</script>

<style lang="sass">
.q-expansion-item__container .q-item
  display: none
</style>
