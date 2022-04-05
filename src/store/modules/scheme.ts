import { defineStore } from 'pinia';
import { store } from '/@/store';
import { 
  inputConf, 
  radioConf,
  checkboxConf,
  selectConf,
  switchConf,
  gridConf,
  formConf,
  setterPanelConf
} from '/@/core/config';
import _set from 'loadsh/set';
import _get from 'loadsh/get';

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
      },
      {
        index: 2,
        name: '多选框',
        type: 'basic-checkbox',
        icon: '',
        options: checkboxConf.default,
        layouts: {
          name: 'general'
        },
      },
      {
        index: 3,
        name: '选择器',
        type: 'basic-select',
        icon: '',
        options: selectConf.default,
        layouts: {
          name: 'general'
        },
      },
      {
        index: 4,
        name: '开关',
        type: 'basic-switch',
        icon: '',
        options: switchConf.default,
        layouts: {
          name: 'general'
        },
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
      }
    ],
    // 设置器数据
    setterData: {
      panel: setterPanelConf.default.panel
    },
    // 
    worksheetData: [],
    // 生成控件
    generateWidgets: [],
    // 当前操作的控件
    recordWidget: [],
  }),
  getters: {
    getWorksheetData():any {
      return this.worksheetData
    },
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
    getSetterData():any {
      return this.setterData
    },
    getRecordWidget():any {
      return this.recordWidget
    }
  },
  actions: {
    handleSetWorksheetData(value:any):any {
      this.worksheetData = value;
    },
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
    },
    handleGetSetterData():any {
      return this.getSetterData;
    },
    handleGetRecordWidget():any {
      return this.getRecordWidget;
    },
    handleSetRecordWidget(value:any):any {
      this.recordWidget = value;
    },
    setFieldValue(fieldPathValMap: object): void {
      Object.keys(fieldPathValMap).map((path) => {
        _set(this.recordWidget, path, fieldPathValMap[path])
      })
    },
    getFieldValue(fieldsPath: Array<string>): any {
      let obj = {};
      fieldsPath.forEach((path) => {
        obj[path] = _get(this.recordWidget, path , '')
      });
      return obj;
    }
  }
})

// Need to be used outside the setup
export function useSchemeStoreWithOut() {
  return useSchemesStore(store);
}