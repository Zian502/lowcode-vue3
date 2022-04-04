import common from './common';

export default {
  ...common,
  props: {
    label: '多选框',
    value: [],
    size: 'default',
    placeholder: '请输入',
    required: false,
    disabled: false,
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
      name: 'setter',
      label: '标签',
      type: 'basic-input',
      setFieldsPath: ['options.props.label'],
      props: {
        label: '标签',
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
        value: '输入框',
        defaultValue: '输入框',
      },
      styles: {

      }
    },
    {
      name: 'setter',
      label: '数据字段',
      type: 'basic-input',
      setFieldsPath: ['options.props.id'],
      props: {
        label: '数据字段',
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
      label: '输入框类型',
      type: 'basic-input',
      setFieldsPath: ['options.props.type'],
      props: {
        label: '输入框类型',
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
      setFieldsPath: ['options.props.placeholder'],
      props: {
        label: '占位内容',
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
      setFieldsPath: ['options.styles.width'],
      props: {
        label: '宽度',
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
      },
      styles: {
        width: '100%'
      }
    },
    {
      name: 'setter',
      label: '默认值',
      type: 'basic-input',
      setFieldsPath: ['options.mock.defaultValue'],
      props: {
        label: '默认值',
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
      setFieldsPath: ['options.props.hidden', 'options.props.disabled', 'options.props.allowClear'],
      props: {
        label: '操作属性',
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
            value: {
              fieldPath: 'options.props.hidden',
              fieldValue: true
            }
          },
          {
            label: '禁用',
            value: {
              fieldPath: 'options.props.disabled',
              fieldValue: true
            }
          },
          {
            label: '可清除',
            value: {
              fieldPath: 'options.props.allowClear',
              fieldValue: true
            }
          }
        ]
      }
    },
    {
      name: 'setter',
      label: '是否必填',
      type: 'basic-radio',
      setFieldsPath: ['options.props.required'],
      props: {
        label: '是否必填',
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
            value: {
              fieldPath: 'options.props.required',
              fieldValue: true
            },
            label: '是',
          },
          {
            value: {
              fieldPath: 'options.props.required',
              fieldValue: false
            },
            label: '否',
          }
        ]
      }
    }
  ],
}