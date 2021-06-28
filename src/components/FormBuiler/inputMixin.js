export default {
  watch: {
    value () {
      this.inputData = this.value
    }
  },
  data () {
    return {
      inputData: null
    }
  },
  created () {
    this.inputData = this.value
  },
  methods: {
    change (val) {
      this.$emit('input', val)
    }
  }
}
