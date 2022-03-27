<template>
  <div class="left-aside-container">
    <!-- basic-控件列表 -->
    <div class="basic-widget-wrap">
      <h3>常用控件</h3>
      <a-row>
        <draggable 
          v-model="basicWidgets" 
          tag="transition-group" 
          :component-data="{name:'fade'}"
          ghost-class="ghost"
          :group="{ name: 'lowcode', pull: 'clone' }"
          :sort="false"
        >
            <template #item="{element}">
              <a-col :span="12" >
                <span class="widget-item">{{element.name}}</span>
              </a-col>
            </template>   
          </draggable>
      </a-row> 
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

    return {
      basicWidgets,
    }
  },
})
</script>

<style lang="less" scoped>
.left-aside-container{
  flex-basis: 33%;
  .widget-item{
    display: flex;
    align-items: center;
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
