import common from './common';

export default {
  ...common,
  props: {
    gutter: 16,
    align: 'middle',
    justify: 'start',
    wrap: false,
  },
  mock:{
    columns: [],
  }
}