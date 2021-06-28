<template>
  <div>
    <entity-index
      v-model="inputs"
      title="سوالات"
      :api="api"
      :table="table"
      :table-keys="{data: 'data', total: 'meta.total', currentPage: 'meta.current_page', perPage: 'meta.per_page', path: 'meta.path', pageKey: 'page'}"
    />
  </div>
</template>

<script>
import EntityIndex from 'components/Entity/Index/EntityIndex'
import API_ADDRESS from 'src/api/Addresses'
export default {
  name: 'QuestionBank',
  components: { EntityIndex },
  data () {
    return {
      expanded: true,
      api: API_ADDRESS.question.index,
      table: {
        columns: [
          {
            name: 'id',
            required: true,
            label: 'id',
            align: 'left',
            field: row => row.source_data.id
          },
          {
            name: 'authorInfo',
            required: true,
            label: 'اطلاعات نویسنده',
            align: 'left',
            field: row => row.source_data.authorInfo
          },
          {
            name: 'difficultyLevel',
            required: true,
            label: 'سختی',
            align: 'left',
            field: row => row.source_data.difficultyLevel.name
          }
        ],
        data: []
      },
      inputs: [
        { type: 'select', name: 'majorId', value: null, options: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'], label: 'سلکت استاندارد', col: 'col-md-3' },
        { type: 'select', name: 'levelId', value: null, options: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'], label: 'سلکت استاندارد', col: 'col-md-3' },
        { type: 'select', name: 'gradeId', value: null, options: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'], label: 'سلکت استاندارد', col: 'col-md-3' },
        { type: 'select', name: 'moduleGroupId', value: null, options: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'], label: 'سلکت استاندارد', col: 'col-md-3' },
        { type: 'select', name: 'majorGroupId', value: null, options: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'], label: 'سلکت استاندارد', col: 'col-md-3' },
        { type: 'select', name: 'moduleId', value: null, options: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'], label: 'سلکت استاندارد', col: 'col-md-3' },
        { type: 'select', name: 'originId', value: null, options: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'], label: 'سلکت استاندارد', col: 'col-md-3' },
        { type: 'select', name: 'publishYearId', value: null, options: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'], label: 'سلکت استاندارد', col: 'col-md-3' },
        { type: 'select', name: 'difficultyLevelId', value: null, options: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'], label: 'سلکت استاندارد', col: 'col-md-3' },

        { type: 'input', value: '', label: 'اینپوت تکست', col: 'col-md-4' },
        { type: 'select', value: '', options: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'], label: 'سلکت استاندارد', col: 'col-md-4' },
        { type: 'file', value: null, label: 'فایل استاندارد', col: 'col-md-4' },
        { type: 'optionGroupRadio', value: 'op2', options: [{ label: 'Option 1', value: 'op1' }, { label: 'Option 2', value: 'op2' }], label: 'ریدیو گروپ', col: 'col-md-4' },
        { type: 'optionGroupCheckbox', value: ['op2'], options: [{ label: 'Option 1', value: 'op1' }, { label: 'Option 2', value: 'op2' }], label: 'چک باکس گروپ', col: 'col-md-4' },
        { type: 'optionGroupToggle', value: ['op1'], options: [{ label: 'Option 1', value: 'op1' }, { label: 'Option 2', value: 'op2' }], label: 'توگل گروپ', col: 'col-md-4' },
        { type: 'slider', value: 23, min: 9, max: 35, label: 'اسلایدر', col: 'col-md-6' },
        { type: 'rangeSlider', value: { min: 9, max: 35 }, min: 9, max: 35, label: 'اسلایدر', col: 'col-md-6' },
        { type: 'dateMultipleRange', value: [], label: 'dateMultipleRange', col: 'col-md-3' },
        { type: 'dateRange', value: [], label: 'dateRange', col: 'col-md-3' },
        { type: 'dateTime', value: '1400/02/14 13:10:10', label: 'dateTime', col: 'col-md-3' },
        { type: 'time', value: '13:10:10', label: 'time' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
