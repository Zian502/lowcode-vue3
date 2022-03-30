
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
  mock: {
    defaultValue: '',
  },
  styles:{
    width: '100%'
  }
}