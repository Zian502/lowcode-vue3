<template>
  <div class="mid-aside-container">
    <draggable 
      class="generate-widget"
      v-model="worksheetData.widgets"
      :group="{ name: 'lowcode'}"
      item-key="id"
      @start="handleStart"
      @add="handleAdd"
      @end="handleEnd"
    >
      <template #item="{element}">
        <draggable
          v-model="element.childs"
          :group="{ name: 'lowcode'}"
          :tag="worksheetData.layouts.tag"
          item-key="id"
          :componentData="{
            ...worksheetData.layouts.props,
          }"
          @start="handleChildStart"
          @add="handleChildAdd"
          @end="handleChildEnd"
          >
            <template #item="{element: child}">
              <a-col :class="classOfAcol(child)" :span="worksheetData.layouts.props.span">
                <renderer 
                  :type="child.type" 
                  :worksheetData="worksheetData"
                  :child="child"
                  :globalOptions="worksheetData.options" 
                  :componentOptions="child.options" 
                  />
                  <!-- mask layer -->
                  <div v-if="child.type !== 'layout-form'" class="mask-layer-container" @click="handleSelect(child)"></div>
              </a-col>
            </template>
        </draggable>
      </template> 
    </draggable>  
  </div>
</template>
<script>
import draggable from "vuedraggable";
import shortid from "shortid";
import { General } from '/@/core/components';
import { useSchemesStore } from '/@/store/modules/scheme';
import _set from 'loadsh/set';
import _get from 'loadsh/get';
import _cloneDeep from 'loadsh/cloneDeep';

const store = useSchemesStore();

export default defineComponent({
  components: {
    draggable,
    General,
  },
  setup(props) {

    let data = reactive({
      worksheetData: {
        widgets: [],
        layouts: {},
        options: {}
      },
      recordWidget: [],
    });
    let widget = ref([]);
    let setters = ref([]);

    let dataSource = ref([]);
    dataSource.value = store.handleGetBasicWidgets();
    data.worksheetData.layouts = store.handleGetGlobalOptions().layouts;
    data.worksheetData.options = store.handleGetGlobalOptions().options;

    watch(() => (data.worksheetData), () => {
      store.handleSetWorksheetData(data.worksheetData)
      store.handleSetGenerateWidgets(data.worksheetData.widgets)
    },{
      deep: true
    });

    // 动态更新
    const unsubscribe = store.$onAction((
      {
        name,   // action 函数的名称
        store,  // store 实例
        args,   // action 函数参数数组
        after,  // 钩子函数，在action函数执行完成返回或者resolves后执行
        onError // 钩子函数，在action函数报错或者rejects后执行
      }) => {
        after(result => {
          console.log('name', name)
          data.recordWidget = store.getRecordWidget
          if(name === 'setFieldValue') {
            _updateWorksheetData(data.recordWidget.parentId, data.recordWidget.id, data.recordWidget)
          } else if (name === 'handleSetRecordWidget') {
            // update setters
            // clone deep
            setters.value = _cloneDeep(data.recordWidget.options.setters);
            console.log('setters', setters)
            console.log('data.recordWidget', data.recordWidget)
            console.log('data.worksheetData', data.worksheetData)
            const setterFieldsPath = data.recordWidget.options.mock.setterFieldsPath || [];
            _updateRecordSetters(data.recordWidget.parentId, data.recordWidget.id, setterFieldsPath)
          }
        })

        onError(error => {
          
        })
      },
      false  //默认是false，设置为true的时候，组件卸载时，订阅依然有效
    )

    // 方法
    const _updateRecordSetters = (supId, id, setterFieldsPath = []) => {
      data.worksheetData.widgets.forEach((widget, index) => {
        if(supId === widget.id) {
          widget.childs.forEach((child, i) => {
            if(id === child.id) {
              if(setterFieldsPath.length>0){
                let obj = {};
                // handle
                setterFieldsPath.forEach((item) => {
                  // get
                  const sourceFieldValue = _get(child,item.sourceFieldPath, '');
                  if(!obj[item.destFieldPath]){
                    obj[item.destFieldPath] = {
                      values: [],
                      paths: []
                    };
                    obj[item.destFieldPath].values.push(sourceFieldValue);
                    if(sourceFieldValue){
                      obj[item.destFieldPath].paths.push(item.sourceFieldPath);
                    };
                  } else {
                    obj[item.destFieldPath].values.push(sourceFieldValue);
                    if(sourceFieldValue){
                      obj[item.destFieldPath].paths.push(item.sourceFieldPath);
                    };
                  };
                  // delete
                  delete child.options.setters;
                  // set
                  nextTick(() => {
                    child.options.setters = setters.value;
                    _set(child,item.destFieldPath,obj[item.destFieldPath].values.length > 1 ? obj[item.destFieldPath].paths : obj[item.destFieldPath].values[0]);
                  });
                });
              }
            }
          })
        }
      })
    }

    const _updateWorksheetData = (supId, id, value) => {
      data.worksheetData.widgets.forEach((widget, index) => {
        if(supId === widget.id) {
          widget.childs.forEach((child, i) => {
            if(id === child.id) {
              widget.value = value;
              // delete
              data.worksheetData.widgets[index].childs.splice(i, 1);
              // set
              nextTick(() => {
                data.worksheetData.widgets[index].childs[i] = widget.value
              });
            }
          })
        }
      })
    }

    const _insertNode = () => {
      const arr = [];
      data.worksheetData.widgets.forEach((item) => {
        arr.push(item);
        arr.push({
          id: shortid.generate(),
          type: "insert",
          layouts: {},
          childs: [],
        });
      });
      data.worksheetData.widgets = arr;
    }

    const _deleteNode = () => {
      nextTick(() => {
        data.worksheetData.widgets.forEach((item, index) => {
          if (
            item.name ||
            !item.childs.length ||
            (item.type === "insert" && !item.childs.length)
          ) {
            data.worksheetData.widgets.splice(index, 1);
          }
        });
      })
    }

    const handleStart = (e) => {
      const oldIndex = e.oldIndex;
      data.recordWidget = dataSource.value[oldIndex];
      _insertNode();
    }

    const handleAdd = (e) => {
      const newIndex = e.newIndex;
      const parentId = shortid.generate()
      const obj = {
        id: parentId,
        type: "transfer",
        childs: [],
      };
      const curWidget = e.item._underlying_vm_;
      // 布局控件
      obj.layouts = {
        name: 'general',
        props: {}
      };
      //
      widget.value = { ...curWidget, parentId};
      //
      data.recordWidget = widget.value;
      // 
      obj.childs.push(widget.value);
      data.worksheetData.widgets.splice(newIndex, 0, obj); //
      // set recordWidget
      store.handleSetRecordWidget(data.recordWidget);
      _deleteNode();
    }

    const handleEnd = () => {
      _deleteNode();
    }

    const handleChildStart = () => {
      _insertNode();
    }

    const handleChildAdd = () => {
       _deleteNode();
    }

    const handleChildEnd = () => {
      _deleteNode();
    }

    const classOfAcol = (val) => {
      const type = val.type;
      return [
        type === 'layout-form' || type === 'layout-grid' ? 'form-border' : 'border',
        type === 'layout-form' || type === 'layout-grid' ? 'pad-0-0' : 'pad-6-6',
        'flex-ali-cen',
        'h-46',
        'm-r-2',
        'm-b-12',
        { 'selected': data.recordWidget.id === val.id }
      ]
    }
    
    const handleSelect = (selectd) => {
      data.recordWidget = selectd;
      // set recordWidget
      store.handleSetRecordWidget(data.recordWidget);
    }

    return {
      ...toRefs(data),
      handleStart,
      handleAdd,
      handleEnd,
      handleChildStart,
      handleChildAdd,
      handleChildEnd,
      classOfAcol,
      handleSelect,
    }
  },
})
</script>
<style lang="less" scoped>
.mid-aside-container{
  background: #fff;
  flex-basis: 60%;
  height: 100%;
  padding: 20px 20px;
  .generate-widget{
    width: 100%;
    height: 100%;
    &-item{
      display: flex;
      flex-basis: 50%;
      margin-bottom: 5px;
      &-child{
        display: flex;
        flex: 1 0 auto;
        margin-bottom: 10px;
      }
    }
  }
  .row{
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }
  .border{
    border: 1px dashed #ccc;
  }
  .pd{
    padding: 6px 6px;
  }
}
</style>
