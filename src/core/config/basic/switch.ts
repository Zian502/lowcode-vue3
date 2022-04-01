
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
  setters: [
    {
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
      },
      mock: {
        defaultValue: '输入框',
      }
    },
    {
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
      },
      mock: {
        defaultValue: '',
      }
    },
    {
      label: '输入框type',
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
      },
      mock: {
        defaultValue: '',
      }
    },
    {
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
      },
      mock: {
        defaultValue: '',
      }
    },
    {
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
      },
      mock: {
        defaultValue: '',
      }
    },
    {
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
      },
      mock: {
        defaultValue: '',
      }
    },
    {
      label: '操作属性',
      type: 'basic-checkbox',
      props: {
        label: '多选框',
        value: [],
        size: 'default',
        placeholder: '请输入',
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
      label: '是否必填',
      type: 'basic-radio',
      props: {
        label: '单选框',
        value: '',
        size: 'default',
        buttonStyle: 'outline',
        optionType: 'default',
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