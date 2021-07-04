<template>
  <q-file @input="change($event)" v-model="inputData" :label="label" :disable="disable" :for="uid" />
  <label :for="uid">
    <q-img
      v-if="inputData"
      :src="(typeof inputData === 'string') ? inputData : createObjectURL()"
      placeholder-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpaqqqq3t7fFxcW+vr6xsbGjo6OcnJyLKnDGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABAElEQVRoge3SMW+DMBiE4YsxJqMJtHOTITPeOsLQnaodGImEUMZEkZhRUqn92f0MaTubtfeMh/QGHANEREREREREREREtIJJ0xbH299kp8l8FaGtLdTQ19HjofxZlJ0m1+eBKZcikd9PWtXC5DoDotRO04B9YOvFIXmXLy2jEbiqE6Df7DTleA5socLqvEFVxtJyrpZFWz/pHM2CVte0lS8g2eDe6prOyqPglhzROL+Xye4tmT4WvRcQ2/m81p+/rdguOi8Hc5L/8Qk4vhZzy08DduGt9eVQyP2qoTM1zi0/uf4hvBWf5c77e69Gf798y08L7j0RERERERERERH9P99ZpSVRivB/rgAAAABJRU5ErkJggg=="
    />
  </label>
</template>

<script>
import { uid } from 'quasar'
import inputMixin from 'components/FormBuiler/inputMixin'
export default {
  name: 'FormBuilderFile',
  props: {
    value: {
      default: ''
    },
    label: {
      default: '',
      type: String
    },
    disable: {
      default: false,
      type: Boolean
    }
  },
  data () {
    return {
      uid: null,
      url: null
    }
  },
  mixins: [inputMixin],
  created () {
    this.uid = this.getUid()
    this.url = this.inputData
  },
  methods: {
    isPhotoUrl (url) {
      return (url.match(/\.(jpeg|jpg|gif|png)$/) != null)
    },
    isValidURL (str) {
      const a = document.createElement('a')
      a.href = str
      return a.host !== ''
    },
    createObjectURL () {
      console.log('dd', this.inputData)
      return window.URL.createObjectURL(this.inputData)
    },
    getUid () {
      return uid()
    }
  }
}
</script>

<style scoped>

</style>
