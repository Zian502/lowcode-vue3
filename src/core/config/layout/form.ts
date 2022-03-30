import common from './common';

export default {
  ...common,
  props: {
    name: '',
    model: {},
    layout: 'horizontal',
    labelWrap: false,
    labelCol: {},
    labelAlign: 'right',
    hideRequiredMark: false,
    colon: true,
    rules: {},
    validateOnRuleChange: false,
    validateMessages: {}
  },
  mock:{
    columns: [],
  }
}