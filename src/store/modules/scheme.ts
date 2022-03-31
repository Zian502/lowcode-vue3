import { defineStore } from 'pinia';
import { store } from '/@/store';
import { 
  inputConf, 
  radioConf,
  selectConf,
  switchConf,
  gridConf,
  formConf
} from '/@/core/config';
import{
  Input,
  Radio,
  Select,
  Switch,
} from '/@/core/components/index';
import{
  Grid,
  Form,
} from '/@/core/components/index';

export const useSchemesStore = defineStore({
  id: 'scheme',
  state: ():any =>({
    // 全局配置
    globalOptions: {
      layouts: {
        name: 'grid',
        tag: 'a-row',
        props: {
          gutter: 16,
          align: 'middle',
          justify: 'start',
          wrap: true,
          span: 24,
        }
      },
      options: {},
      widgetModules:{}
    },
    // 基础控件
    basicWidgets:[
      {
        index: 0,
        name: '输入框',
        type: 'basic-input',
        icon: '',
        options: inputConf.default,
        layouts: {
          name: 'general'
        },
        components: Input,
      },
      {
        index: 1,
        name: '单选框',
        type: 'basic-radio',
        icon: '',
        options: radioConf.default,
        layouts: {
          name: 'general'
        },
        components: Radio,
      },
      {
        index: 2,
        name: '选择器',
        type: 'basic-select',
        icon: '',
        options: selectConf.default,
        layouts: {
          name: 'general'
        },
        components: Select,
      },
      {
        index: 3,
        name: '开关',
        type: 'basic-switch',
        icon: '',
        options: switchConf.default,
        layouts: {
          name: 'general'
        },
        components: Switch,
      }
    ],
    // 高级控件
    advancedWidgets: [],
    // 布局控件
    layoutWidgets: [
      {
        index: 0,
        name: '栅格布局',
        type: 'layout-grid',
        icon: '',
        options: gridConf.default,
        layouts: {
          name: 'general'
        },
        components: Grid,
      },
      {
        index: 0,
        name: '表单布局',
        type: 'layout-form',
        icon: '',
        options: formConf.default,
        layouts: {
          name: 'general'
        },
        components: Form,
      }
    ],
    // 生成控件
    generateWidgets: []
  }),
  getters: {
    getGlobalOptions():any {
      return this.globalOptions
    },
    getBasicWidgets():any {
      return this.basicWidgets
    },
    getLayoutWidgets():any {
      return this.layoutWidgets
    },
    getGenerateWidgets():any {
      return this.generateWidgets
    },
  },
  actions: {
    handleGetGlobalOptions():any {
      return this.getGlobalOptions;
    },
    handleGetBasicWidgets():any {
      return this.getBasicWidgets;
    },
    handleGetLayoutWidgets():any{
      return this.getLayoutWidgets;
    },
    handleSetGenerateWidgets(value:any):any {
      this.generateWidgets = value;
    },
    handleGetGenerateWidgets():any {
      return this.getGenerateWidgets;
    }
  }
})

// Need to be used outside the setup
export function useSchemeStoreWithOut() {
  return useSchemesStore(store);
}