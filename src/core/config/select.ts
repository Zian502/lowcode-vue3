
import common from './common';

export default {
  ...common,
  props: {
    value: '',
    allowClear: false,
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