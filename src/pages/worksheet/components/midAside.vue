<template>
  <div class="mid-aside-container">
    <draggable 
      class="drag-generate-widget"
      v-model="generateWidgets" 
      tag="div" 
      ghost-class="ghost"
      chosen-class="chosen"
      :group="{ name: 'lowcode'}"
      @start="handleStart"
      @add="handleAdd"
      @end="handleEnd"
    >
        <template #item="items">
          <div class="drag-generate-widget-item">
            <draggable
              v-model="items.element.childs"
              tag="div" 
              ghost-class="ghost"
              chosen-class="chosen"
              :group="{ name: 'lowcode'}"
              class="row"
              @start="handleChildStart"
              @add="handleChildAdd"
              @end="handleChildEnd"
              >
                <template #item="{element}">
                    <div class="drag-generate-widget-item-child">
                      <Renderer :compName="element.compName" :config="element.config" />
                    </div> 
                </template>
            </draggable>
           </div>  
        </template> 
    </draggable>    
  </div>
</template>
<script>
import draggable from "vuedraggable";
import { useSchemesStore } from '/@/store/modules/scheme';

const store = useSchemesStore();

export default defineComponent({
  components: {
    draggable
  },
  setup(props) {
    
    let data = reactive({
      generateWidgets: []
    });

    let dataSource = ref([]);
    dataSource.value = store.handleGetBasicWidgets();

    watch(() => (data.generateWidgets), () => {
      store.handleSetGenerateWidgets(data.generateWidgets)
    })

    // 方法
    const _insertNode = () => {
      const arr = [];
      data.generateWidgets.forEach((item) => {
        arr.push(item);
        arr.push({
          type: "insert",
          id: Math.random(),
          childs: [],
        });
      });
      data.generateWidgets = arr;
    }

    const _deleteNode = () => {
      nextTick(() => {
        data.generateWidgets.forEach((item, index) => {
          if (
            item.name ||
            !item.childs.length ||
            (item.type === "insert" && !item.childs.length)
          ) {
            data.generateWidgets.splice(index, 1);
          }
        });
      })
    }

    const handleStart = () => {
      console.log('start')
      // _insertNode();
    }

    const handleAdd = (e) => {
      console.log('add')
      console.log(e)
      console.log('dataSource', dataSource)
      const oldIndex = e.oldIndex;
      const newIndex = e.newIndex;
      const obj = {
        type: "transfer",
        id: Math.random(),
        childs: [],
      };
      console.log('e.item._underlying_vm_', e.item._underlying_vm_)
      // obj.childs.push({ ...e.item._underlying_vm_ });
      obj.childs.push({...dataSource.value[oldIndex]})
      data.generateWidgets.splice(newIndex, 0, obj); //
      _deleteNode();
    }

    const handleEnd = () => {
      console.log('end')
      _deleteNode();
    }

    const handleChildStart = () => {
      // _insertNode();
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
  .drag-generate-widget{
    width: 100%;
    height: 100%;
  }
  .drag-generate-widget-item {
    flex: 1 0 auto;
    width: 100%;
    margin-bottom: 5px;
  }
  .drag-generate-widget-item-child {
    display: flex;
    flex: 1 0 auto;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
