<template>
  <div class="mid-aside-container">
    <a-row :gutter="16">
      <draggable 
        class="generate-widget"
        v-model="generateWidgets"
        ghost-class="ghost"
        chosen-class="chosen"
        :group="{ name: 'lowcode'}"
        item-key="id"
        @start="handleStart"
        @add="handleAdd"
        @end="handleEnd"
      >
        <template #item="{element: item}">
            <draggable
              v-model="item.childs"
              ghost-class="ghost"
              chosen-class="chosen"
              :group="{ name: 'lowcode'}"
              item-key="id"
              @start="handleChildStart"
              @add="handleChildAdd"
              @end="handleChildEnd"
              class="row"
              >
                <template #item="{element: child}">
                    <a-col :span="12">
                      <div class="renderer-container">
                        <Renderer :is="child.components" :config="child.config" />
                      </div>
                    </a-col> 
                </template>
            </draggable>
        </template> 
      </draggable>  
    </a-row>  
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
      generateWidgets: [],
      recordWidgets: [],
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

    const handleStart = (e) => {
      const oldIndex = e.oldIndex;
      data.recordWidgets = dataSource.value[oldIndex];
      _insertNode();
    }

    const handleAdd = (e) => {
      const newIndex = e.newIndex;
      const obj = {
        type: "transfer",
        id: Math.random(),
        childs: [],
      };
      // 
      obj.childs.push({ ...e.item._underlying_vm_ });
      data.generateWidgets.splice(newIndex, 0, obj); //
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
