
import common from './common';

export default {
  ...common,
  props: {
    type: 'textarea',
    value: '',
    size: 'large',
    placeholder: '请输入',
    autoSize: true,
    maxlength: null,
    rows: 1,
  },
  mock: {
    defaultValue: '',
  }
}