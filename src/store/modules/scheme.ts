import { defineStore } from 'pinia';
import { store } from '/@/store';
import { 
  inputConf, 
  radioConf,
  selectConf,
  switchConf,
} from '/@/core/config';
import{
  Input,
  Radio,
  Select,
  Switch,
} from '/@/core/components/index';

export const useSchemesStore = defineStore({
  id: 'scheme',
  state: ():any =>({
    basicWidgets:[
      {
        index: 0,
        name: '输入框',
        type: 'basic',
        icon: '',
        options: inputConf.default,
        components: Input,
      },
      {
        index: 1,
        name: '单选框',
        type: 'basic',
        icon: '',
        options: radioConf.default,
        components: Radio,
      },
      {
        index: 2,
        name: '选择器',
        type: 'basic',
        icon: '',
        options: selectConf.default,
        components: Select,
      },
      {
        index: 3,
        name: '开关',
        type: 'basic',
        icon: '',
        options: switchConf.default,
        components: Switch,
      }
    ],
    generateWidgets: []
  }),
  getters: {
    getBasicWidgets():any {
      return this.basicWidgets
    },
    getGenerateWidgets():any {
      return this.generateWidgets
    },

  },
  actions: {
    handleGetBasicWidgets():any {
      return this.getBasicWidgets;
    },
    handleSetGenerateWidgets(value:any):any {
      this.generateWidgets = value
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