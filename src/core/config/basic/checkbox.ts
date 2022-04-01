
import common from './common';

export default {
  ...common,
  props: {
    label: '多选框',
    value: [],
    size: 'default',
    placeholder: '请输入',
  },
  layouts: {
    formItem:{
      name: 'checkbox',
      label: '多选框',
      labelAlign: 'right',
      labelCol: {},
      required: false,
      extra: '',
    }
  },
  mock: {
    defaultValue: '',
    defaultList: [
      {
        value: '梓',
        label: '梓'
      },
      {
        value: '安',
        label: '安'
      }
    ],
  },
  styles:{
    width: '100%'
  },
  setters: [
    {
      label: '标签',
      type: 'basic-input',
      defaultValue: '输入框',
    },
    {
      label: '数据字段',
      type: 'basic-input',
      defaultValue: '',
    },
    {
      label: '输入框type',
      type: 'basic-input',
      defaultValue: '',
    },
    {
      label: '占位内容',
      type: 'basic-input',
      defaultValue: '',
    },
    {
      label: '宽度',
      type: 'basic-input',
      defaultValue: '',
    },
    {
      label: '默认值',
      type: 'basic-input',
      defaultValue: '',
    },
    {
      label: '操作属性',
      type: 'basic-checkbox',
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
      type: 'basic-radio',
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