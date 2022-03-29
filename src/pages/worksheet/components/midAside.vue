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
            tag="a-row"
            item-key="id"
            :componentData="{
              gutter: worksheetData.options.layouts.row.gutter,
              align: worksheetData.options.layouts.row.align,
            }"
            @start="handleChildStart"
            @add="handleChildAdd"
            @end="handleChildEnd"
          >
            <template #item="{element: child}">
              <a-col :span="12">
                <renderer :is="child.components" :globalOptions="worksheetData.options" :componentOptions="child.options" />
              </a-col>
            </template>
        </draggable>
      </template> 
    </draggable>  
  </div>
</template>
<script>
import draggable from "vuedraggable";
import { useSchemesStore } from '/@/store/modules/scheme';
import shortid from "shortid";
const store = useSchemesStore();

export default defineComponent({
  components: {
    draggable,
  },
  setup(props) {

    let data = reactive({
      worksheetData: {
        widgets: [],
        options: {}
      },
      recordWidget: [],
    });

    let dataSource = ref([]);
    dataSource.value = store.handleGetBasicWidgets();
    data.worksheetData.options = store.handleGetGlobalOptions();

    watch(() => (data.worksheetData), () => {
      store.handleSetGenerateWidgets(data.worksheetData.widgets)
    },{
      deep: true
    })

    // 方法
    const _insertNode = () => {
      const arr = [];
      data.worksheetData.widgets.forEach((item) => {
        arr.push(item);
        arr.push({
          id: shortid.generate(),
          type: "insert",
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
      console.log(e)
      // 
      obj.childs.push({ ...e.item._underlying_vm_ });
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

    return {
      ...toRefs(data),
      handleStart,
      handleAdd,
      handleEnd,
      handleChildStart,
      handleChildAdd,
      handleChildEnd,
    }
  },
})
</script>
<style lang="less" scoped>
.mid-aside-container{
  background: #fff;
  flex-basis: 33%;
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
  .renderer-container{
    margin-bottom: 5px;
  }
}
</style>
