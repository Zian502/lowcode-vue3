
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
  },
  setters: [
    {
      label: '标签',
      type: 'input',
      defaultValue: '输入框',
    },
    {
      label: '数据字段',
      type: 'input',
      defaultValue: '',
    },
    {
      label: '输入框type',
      type: 'input',
      defaultValue: '',
    },
    {
      label: '占位内容',
      type: 'input',
      defaultValue: '',
    },
    {
      label: '宽度',
      type: 'input',
      defaultValue: '',
    },
    {
      label: '默认值',
      type: 'input',
      defaultValue: '',
    },
    {
      label: '操作属性',
      type: 'checkbox',
      defaultValue: '',
      defaultList: [
        {
          label: '隐藏',
          value: 0
        },
        {
          label: '禁用',
          value: 1
        },
        {
          label: '可清除',
          value: 2
        }
      ]
    },
    {
      label: '是否必填',
      type: 'radio',
      defaultValue: 0,
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
    }
  ],
}