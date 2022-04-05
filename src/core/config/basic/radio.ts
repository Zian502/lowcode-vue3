
import common from './common';

export default {
  ...common,
  props: {
    label: '单选框',
    value: '',
    size: 'default',
    buttonStyle: 'outline',
    optionType: 'default',
    required: false,
    disabled: false,
    hidden: false,
  },
  layouts: {
    formItem:{
      name: 'radio',
      label: '单选框',
      labelAlign: 'right',
      labelCol: {},
      required: false,
      extra: '',
      rules: [],
    }
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
    ],
    setterFieldsPath: [
      {
        sourceFieldPath: 'options.props.label',
        destFieldPath: 'options.setters[0].mock.value',
        destFieldValue: ''
      },
      {
        sourceFieldPath: 'id',
        destFieldPath: 'options.setters[1].mock.value',
        destFieldValue: ''
      },
      {
        sourceFieldPath: 'options.props.type',
        destFieldPath: 'options.setters[2].mock.value',
        destFieldValue: ''
      },
      {
        sourceFieldPath: 'options.props.placeholder',
        destFieldPath: 'options.setters[3].mock.value',
        destFieldValue: ''
      },
      {
        sourceFieldPath: 'options.styles.width',
        destFieldPath: 'options.setters[4].mock.value',
        destFieldValue: ''
      },
      {
        sourceFieldPath: 'options.mock.defaultValue',
        destFieldPath: 'options.setters[5].mock.value',
        destFieldValue: ''
      },
      {
        sourceFieldPath: 'options.props.hidden',
        destFieldPath: 'options.setters[6].mock.value',
        destFieldValue: ''
      },
      {
        sourceFieldPath: 'options.props.disabled',
        destFieldPath: 'options.setters[6].mock.value',
        destFieldValue: ''
      },
      {
        sourceFieldPath: 'options.props.allowClear',
        destFieldPath: 'options.setters[6].mock.value',
        destFieldValue: ''
      },
      {
        sourceFieldPath: 'options.props.required',
        destFieldPath: 'options.setters[7].mock.value',
        destFieldValue: ''
      }
    ],
  },
  styles:{
    width: '100%'
  },
  setters: [
    {
      tabIndex: '0',
      name: 'setter',
      label: '标签',
      type: 'basic-input',
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
        value: '',
        defaultValue: '',
        setterFieldsPath: [
          {
            sourceFieldPath: 'options.setters[0].mock.value',
            destFieldPath: 'options.props.label',
            destFieldValue: ''
          }
        ]
      },
      styles: {

      }
    },
    {
      tabIndex: '0',
      name: 'setter',
      label: '数据字段',
      type: 'basic-input',
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
        value: '',
        defaultValue: '',
        setterFieldsPath: [
          {
            sourceFieldPath: 'options.setters[1].mock.value',
            destFieldPath: 'options.props.id',
            destFieldValue: ''
          }
        ]
      }
    },
    {
      tabIndex: '0',
      name: 'setter',
      label: '输入框类型',
      type: 'basic-input',
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
        value: '',
        defaultValue: '',
        setterFieldsPath: [
          {
            sourceFieldPath: 'options.setters[2].mock.value',
            destFieldPath: 'options.props.type',
            destFieldValue: ''
          }
        ]
      }
    },
    {
      tabIndex: '0',
      name: 'setter',
      label: '占位内容',
      type: 'basic-input',
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
        value: '',
        defaultValue: '',
        setterFieldsPath: [
          {
            sourceFieldPath: 'options.setters[3].mock.value',
            destFieldPath: 'options.props.placeholder',
            destFieldValue: ''
          }
        ]
      }
    },
    {
      tabIndex: '0',
      name: 'setter',
      label: '宽度',
      type: 'basic-input',
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
        value: '',
        defaultValue: '',
        setterFieldsPath: [
          {
            sourceFieldPath: 'options.setters[4].mock.value',
            destFieldPath: 'options.styles.width',
            destFieldValue: ''
          }
        ]
      },
      styles: {
        width: '100%'
      }
    },
    {
      tabIndex: '0',
      name: 'setter',
      label: '默认值',
      type: 'basic-input',
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
        value: '',
        defaultValue: '',
        setterFieldsPath: [
          {
            sourceFieldPath: 'options.setters[5].mock.value',
            destFieldPath: 'options.mock.defaultValue',
            destFieldValue: ''
          }
        ]
      }
    },
    {
      tabIndex: '0',
      name: 'setter',
      label: '操作属性',
      type: 'basic-checkbox',
      props: {
        label: '操作属性',
        value: [],
        size: 'default',
        placeholder: '请输入',
        required: false,
      },
      mock: {
        value: '',
        defaultValue: '',
        defaultList: [
          {
            label: '隐藏',
            value: 'options.props.hidden'
          },
          {
            label: '禁用',
            value: 'options.props.disabled'
          },
          {
            label: '可清除',
            value: 'options.props.allowClear'
          }
        ],
        setterFieldsPath: [
          {
            sourceFieldPath: 'options.setters[6].mock.value',
            destFieldPath: 'options.props.hidden',
            destFieldValue: ''
          },
          {
            sourceFieldPath: 'options.setters[6].mock.value',
            destFieldPath: 'options.props.disabled',
            destFieldValue: ''
          },
          {
            sourceFieldPath: 'options.setters[6].mock.value',
            destFieldPath: 'options.props.allowClear',
            destFieldValue: ''
          }
        ]
      }
    },
    {
      tabIndex: '0',
      name: 'setter',
      label: '是否必填',
      type: 'basic-radio',
      props: {
        label: '是否必填',
        value: '',
        size: 'default',
        buttonStyle: 'outline',
        optionType: 'default',
        required: false,
      },
      mock: {
        value: '',
        defaultValue: '',
        defaultList: [
          {
            value: true,
            label: '是',
          },
          {
            value: false,
            label: '否',
          }
        ],
        setterFieldsPath: [
          {
            sourceFieldPath: 'options.setters[7].mock.value',
            destFieldPath: 'options.props.required',
            destFieldValue: ''
          }
        ]
      }
    }
  ],
}