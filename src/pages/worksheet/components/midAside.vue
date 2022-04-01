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

    let dataSource = ref([]);
    dataSource.value = store.handleGetBasicWidgets();
    data.worksheetData.layouts = store.handleGetGlobalOptions().layouts;
    data.worksheetData.options = store.handleGetGlobalOptions().options;

    watch(() => (data.worksheetData), () => {
      store.handleSetGenerateWidgets(data.worksheetData.widgets)
    },{
      deep: true
    });

    // 方法
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
      const obj = {
        id: shortid.generate(),
        type: "transfer",
        childs: [],
      };
      const curWidget = e.item._underlying_vm_;
      // 布局控件
      obj.layouts = {
        name: 'general',
        props: {}
      };
      // 子集控件
      obj.childs.push({ ...curWidget });
      data.worksheetData.widgets.splice(newIndex, 0, obj); //
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
        'm-b-12'
      ]
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
