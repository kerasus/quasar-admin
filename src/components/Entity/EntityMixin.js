import axios from 'axios'

const EntityMixin = {
  methods: {
    getEntityId () {
      const target = this.inputData.find(item => item.name.toString() === this.entityIdKey.toString())
      if (!target) {
        return false
      }

      return target.value
    },
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

export default EntityMixin
