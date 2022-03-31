
import common from './common';

export default {
  ...common,
  props: {
    label: '输入框',
    type: 'input',
    value: '',
    size: 'default',
    placeholder: '请输入',
    autoSize: true,
    maxlength: null,
    rows: 1,
  },
  layouts: {
    formItem:{
      name: 'input',
      label: '输入框',
      labelAlign: 'right',
      labelCol: {},
      required: false,
      extra: '',
      rules: [],
    }
  },
  mock: {
    defaultValue: '',
  },
  styles:{
    width: '100%'
  }
}