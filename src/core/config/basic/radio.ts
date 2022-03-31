
import common from './common';

export default {
  ...common,
  props: {
    label: '单选框',
    value: '',
    size: 'default',
    buttonStyle: 'outline',
    optionType: 'default',
  },
  layouts: {
    formItem:{
      name: 'radio',
      label: '单选框',
      labelAlign: 'right',
      labelCol: {},
      required: false,
      extra: '',
      rules: [],
    }
  },
  mock:{
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