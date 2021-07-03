<template>
  <portlet ref="portlet">
    <template v-slot:title>
      {{ title }}
    </template>
    <template v-slot:toolbar>
      <q-btn flat round icon="check" @click="createEntity()">
        <q-tooltip>
          ذخیره
        </q-tooltip>
      </q-btn>
      <q-btn flat round icon="close" @click="goToIndexView()">
        <q-tooltip>
          لغو
        </q-tooltip>
      </q-btn>
      <q-btn flat round :icon="(expanded) ? 'expand_less' : 'expand_more'" @click="expanded = !expanded">
        <q-tooltip>
          <span v-if="expanded">عدم نمایش فرم</span>
          <span v-else>نمایش فرم</span>
        </q-tooltip>
      </q-btn>
    </template>
    <template v-slot:content>
      <q-expansion-item v-model="expanded">
        <form-builder v-model:value="inputData" :disable="false" />
        <q-inner-loading :showing="loading">
          <q-spinner-ball color="primary" size="50px" />
        </q-inner-loading>
      </q-expansion-item>
    </template>
  </portlet>
</template>

<script>
import Portlet from 'components/Portlet'
import EntityMixin from 'components/Entity/EntityMixin'
import inputMixin from 'components/FormBuiler/inputMixin'
import FormBuilder from 'components/FormBuiler/FormBuilder'
import axios from 'axios'

export default {
  name: 'EntityCreate',
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
    entityIdKeyInResponse: {
      default: 'id',
      type: String
    },
    showRouteName: {
      default: '',
      type: String
    },
    showRouteParamKey: {
      default: '',
      type: String
    },
    indexRouteName: {
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
  mixins: [inputMixin, EntityMixin],
  components: { Portlet, FormBuilder },
  data () {
    return {
      expanded: true,
      loading: false
    }
  },
  methods: {
    createEntity () {
      this.loading = true
      const formData = this.getFormData()
      axios.post(this.api, formData)
        .then((response) => {
          this.loading = false
          this.$router.push({ name: this.showRouteName, params: { [this.showRouteParamKey]: response.data[this.entityIdKeyInResponse] } })
        })
        .catch(() => {
          this.loading = false
          this.getData()
        })
    }
  }
}
</script>

<style lang="sass">
.q-expansion-item__container .q-item
  display: none
</style>
