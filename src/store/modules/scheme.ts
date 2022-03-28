import { defineStore } from 'pinia';
import { store } from '/@/store';
import { 
  inputConf, 
  radioConf,
  selectConf
} from '/@/core/config';
import{
  Input,
  Radio,
  Select,
} from '/@/core/components/index';

export const useSchemesStore = defineStore({
  id: 'scheme',
  state: ():any =>({
    basicWidgets:[
      {
        id: 0,
        name: '输入框',
        type: 'basic',
        icon: '',
        config: inputConf.default,
        components: Input,
      },
      {
        id: 1,
        name: '单选框',
        type: 'basic',
        icon: '',
        config: radioConf.default,
        components: Radio,
      },
      {
        id: 2,
        name: '选择器',
        type: 'basic',
        icon: '',
        config: selectConf.default,
        components: Select,
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