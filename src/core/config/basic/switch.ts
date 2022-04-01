
import common from './common';

export default {
  ...common,
  props: {
    label: '开关',
    checked: false,
    size: 'default',
    disabled: false,
    loading: false,
    autofocus: false,
  },
  layouts: {
    formItem:{
      name: 'switch',
      label: '开关',
      labelAlign: 'right',
      labelCol: {},
      required: false,
      extra: '',
      rules: [],
    }
  },
  mock: {},
  setters: {},
}