
import common from './common';

export default {
  ...common,
  props: {
    label: '选择器',
    value: '',
    allowClear: false,
  },
  layouts: {
    formItem:{
      name: 'select',
      label: '选择器',
      labelAlign: 'right',
      labelCol: {},
      required: false,
      extra: '',
      rules: [],
    }
  },
  mock: {
    defaultValue: '',
    defaultList: [
      {
        value: 1,
        label: '是'
      },
      {
        value: 0,
        label: '否'
      }
    ]
  },
  styles:{
    width: '100%'
  }
}