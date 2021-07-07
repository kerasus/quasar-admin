<template>
  <q-file @change="change($event)" v-model="file" :label="label" :disable="disable" :for="uid" clearable @clear="onClearInputFile" />
  <label :for="uid">
    <q-img
      v-if="canLoadImage"
      :src="imageSource"
      placeholder-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpaqqqq3t7fFxcW+vr6xsbGjo6OcnJyLKnDGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABAElEQVRoge3SMW+DMBiE4YsxJqMJtHOTITPeOsLQnaodGImEUMZEkZhRUqn92f0MaTubtfeMh/QGHANEREREREREREREtIJJ0xbH299kp8l8FaGtLdTQ19HjofxZlJ0m1+eBKZcikd9PWtXC5DoDotRO04B9YOvFIXmXLy2jEbiqE6Df7DTleA5socLqvEFVxtJyrpZFWz/pHM2CVte0lS8g2eDe6prOyqPglhzROL+Xye4tmT4WvRcQ2/m81p+/rdguOi8Hc5L/8Qk4vhZzy08DduGt9eVQyP2qoTM1zi0/uf4hvBWf5c77e69Gf798y08L7j0RERERERERERH9P99ZpSVRivB/rgAAAABJRU5ErkJggg=="
    />
  </label>
</template>

<script>
import { uid } from 'quasar'
import inputMixin from 'components/FormBuilder/inputMixin'
export default {
  name: 'FormBuilderFile',
  props: {
    value: {
      default: '',
      type: [String, File]
    }
  },
  data () {
    return {
      file: null,
      uid: null,
      url: null
    }
  },
  mixins: [inputMixin],
  created () {
    this.uid = this.getUid()
  },
  watch: {
    value (newValue) {
      this.inputData = newValue
      if (this.isFile(newValue)) {
        this.file = newValue
      }
    },
    inputData (newValue) {
      if (this.isPhotoUrl(newValue)) {
        this.url = newValue
      }
    },
    file (newValue) {
      this.inputData = newValue
    }
  },
  computed: {
    canLoadImage () {
      if (this.isValidURL(this.inputData)) {
        return this.isPhotoUrl(this.inputData)
      } else if (this.inputData instanceof File) {
        return this.isPhotoFile(this.inputData)
      } else {
        return false
      }
    },
    imageSource () {
      if (this.isValidURL(this.inputData)) {
        return this.inputData
      } else if (this.inputData instanceof File) {
        return this.createObjectURL()
      } else {
        return null
      }
    }
  },
  methods: {
    onClearInputFile () {
      if (this.inputData === null) {
        this.inputData = this.url
      }
    },
    isPhotoFile (file) {
      if (!this.isFile(file) || typeof file.type !== 'string') {
        return false
      }
      return file.type.match(/\/(jpeg|jpg|gif|png)$/) != null
    },
    isFile (file) {
      return file instanceof File
    },
    isPhotoUrl (url) {
      if (!url || typeof url !== 'string') {
        return false
      }
      return (url.match(/\.(jpeg|jpg|gif|png)$/) != null)
    },
    isValidURL (str) {
      if (!str || this.isFile(str)) {
        return false
      }
      const a = document.createElement('a')
      a.href = str
      return a.host !== ''
    },
    createObjectURL () {
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
