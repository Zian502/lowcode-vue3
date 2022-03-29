<template>
  <div class="left-aside-container">
    <!-- basic-控件列表 -->
    <div class="basic-widget-wrap">
      <h3>常用控件</h3>
        <draggable 
          class="widget-list"
          v-model="basicWidgets"
          ghost-class="ghost"
          :group="{ name: 'lowcode', pull: 'clone' }"
          :sort="false"
          :clone="handleClone"
          item-key="id"
        >
          <template #item="{element}">
            <span class="widget-item">{{element.name}}</span>
          </template>   
        </draggable>
    </div>
    <!-- advanced-控件列表 -->
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
  setup() {
    let basicWidgets = ref([]);
    basicWidgets.value = store.handleGetBasicWidgets();

    const handleClone = (e) => {
      console.log('e',e)
      return {
        id: Math.random(),
        ...e
      }
    }
    return {
      basicWidgets,
      handleClone,
    }
  },
})
</script>

<style lang="less" scoped>
.left-aside-container{
  flex-basis: 33%;
  .widget-list{
    
  }
  .widget-item{
    display: inline-block;
    width: 40%;
    cursor: pointer;
    background-color: rgb(255, 255, 255);
    border: 1px solid transparent;
    box-shadow: rgb(0 0 0 / 6%) 0px 1px 2px;
    border-radius: 4px;
    margin: 4px 4px;
    padding: 4px 4px;
  }
}
</style>
