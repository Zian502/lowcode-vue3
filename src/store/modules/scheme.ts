import { defineStore } from 'pinia';
import { store } from '/@/store';
import { 
  inputConf, 
  radioConf,
  selectConf,
  switchConf,
  generalConf,
  formConf
} from '/@/core/config';
import{
  Input,
  Radio,
  Select,
  Switch,
} from '/@/core/components/index';
import{
  General,
  Form,
} from '/@/core/components/index';

export const useSchemesStore = defineStore({
  id: 'scheme',
  state: ():any =>({
    // 全局配置
    globalOptions: {
      layouts: {
        row: {
          gutter: 16,
          align: 'top'
        },
        form: {

        }
      }
    },
    // 基础控件
    basicWidgets:[
      {
        index: 0,
        name: '输入框',
        type: 'basic-input',
        icon: '',
        options: inputConf.default,
        components: Input,
      },
      {
        index: 1,
        name: '单选框',
        type: 'basic-radio',
        icon: '',
        options: radioConf.default,
        components: Radio,
      },
      {
        index: 2,
        name: '选择器',
        type: 'basic-select',
        icon: '',
        options: selectConf.default,
        components: Select,
      },
      {
        index: 3,
        name: '开关',
        type: 'basic-switch',
        icon: '',
        options: switchConf.default,
        components: Switch,
      }
    ],
    // 高级控件
    advancedWidgets: [],
    // 布局控件
    layoutWidgets: [
      {
        index: 0,
        name: '普通',
        type: 'layout-general',
        icon: '',
        options: generalConf.default,
        components: General,
        columns: [],
      },
      {
        index: 0,
        name: '表单',
        type: 'layout-form',
        icon: '',
        options: formConf.default,
        components: Form,
        columns: [],
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