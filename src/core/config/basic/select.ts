
import common from './common';

export default {
  ...common,
  props: {
    label: '选择器',
    value: '',
    allowClear: false,
    required: false,
    disabled: false,
  },
  layouts: {
    formItem:{
      name: 'select',
      label: '选择器',
      labelAlign: 'right',
      labelCol: {},
      required: false,
      extra: '',
      rules: [],
    }
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
  },
  setters: [
    {
      name: 'setter',
      label: '标签',
      type: 'basic-input',
      props: {
        label: '输入框',
        type: 'input',
        value: '',
        size: 'default',
        placeholder: '请输入',
        autoSize: true,
        maxlength: null,
        rows: 1,
        required: false,
      },
      mock: {
        defaultValue: '输入框',
      }
    },
    {
      name: 'setter',
      label: '数据字段',
      type: 'basic-input',
      props: {
        label: '输入框',
        type: 'input',
        value: '',
        size: 'default',
        placeholder: '请输入',
        autoSize: true,
        maxlength: null,
        rows: 1,
        required: false,
      },
      mock: {
        defaultValue: '',
      }
    },
    {
      name: 'setter',
      label: '输入框',
      type: 'basic-input',
      props: {
        label: '输入框',
        type: 'input',
        value: '',
        size: 'default',
        placeholder: '请输入',
        autoSize: true,
        maxlength: null,
        rows: 1,
        required: false,
      },
      mock: {
        defaultValue: '',
      }
    },
    {
      name: 'setter',
      label: '占位内容',
      type: 'basic-input',
      props: {
        label: '输入框',
        type: 'input',
        value: '',
        size: 'default',
        placeholder: '请输入',
        autoSize: true,
        maxlength: null,
        rows: 1,
        required: false,
      },
      mock: {
        defaultValue: '',
      }
    },
    {
      name: 'setter',
      label: '宽度',
      type: 'basic-input',
      props: {
        label: '输入框',
        type: 'input',
        value: '',
        size: 'default',
        placeholder: '请输入',
        autoSize: true,
        maxlength: null,
        rows: 1,
        required: false,
      },
      mock: {
        defaultValue: '',
      }
    },
    {
      name: 'setter',
      label: '默认值',
      type: 'basic-input',
      props: {
        label: '输入框',
        type: 'input',
        value: '',
        size: 'default',
        placeholder: '请输入',
        autoSize: true,
        maxlength: null,
        rows: 1,
        required: false,
      },
      mock: {
        defaultValue: '',
      }
    },
    {
      name: 'setter',
      label: '操作属性',
      type: 'basic-checkbox',
      props: {
        label: '多选框',
        value: [],
        size: 'default',
        placeholder: '请输入',
        required: false,
      },
      mock: {
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
      }
    },
    {
      name: 'setter',
      label: '是否必填',
      type: 'basic-radio',
      props: {
        label: '单选框',
        value: '',
        size: 'default',
        buttonStyle: 'outline',
        optionType: 'default',
        required: false,
      },
      mock: {
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
    }
  ],
}