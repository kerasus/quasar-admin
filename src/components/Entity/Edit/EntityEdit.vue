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
      <q-btn flat round icon="check" @click="editEntity()">
        <q-tooltip>
          ذخیره
        </q-tooltip>
      </q-btn>
      <q-btn flat round icon="close" @click="goToShowView()">
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
  name: 'EntityEdit',
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
    entityIdKey: {
      default: 'id',
      type: String
    },
    entityParamKey: {
      default: 'id',
      type: String
    },
    showRouteName: {
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
  created () {
    this.getData()
  },
  methods: {
    goToShowView () {
      this.$router.push({ name: this.showRouteName, params: { [this.entityParamKey]: this.getEntityId() } })
    },
    getUpdateData () {
      const data = {}
      this.inputData.forEach(item => {
        if (item.disable === false) {
          data[item.name] = item.value
        }
      })

      return data
    },
    editEntity () {
      const updateData = this.getUpdateData()
      axios.put(this.api, updateData)
        .then(() => {
          this.getData()
        })
        .catch(() => {
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
