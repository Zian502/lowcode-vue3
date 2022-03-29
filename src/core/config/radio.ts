
import common from './common';

export default {
  ...common,
  props: {
    value: '',
    size: 'default',
    buttonStyle: 'outline',
    optionType: 'default'
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