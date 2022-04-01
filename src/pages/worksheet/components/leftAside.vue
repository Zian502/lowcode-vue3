<template>
  <div class="left-aside-container">
    <!-- basic-控件列表 -->
    <div class="basic-widget-wrap">
      <h3>常用控件</h3>
        <v-draggable 
          v-model="basicWidgets"
          :group="{ name: 'lowcode', pull: 'clone' }"
          :sort="false"
          :clone="handleClone"
        >
          <template #item="{item}">
            <span class="widget-item">{{item.name}}</span>
          </template>
        </v-draggable>
    </div>
    <!-- advanced-控件列表 -->

    <!-- 布局-控件列表 -->
    <div class="basic-widget-wrap">
      <h3>布局控件</h3>
        <v-draggable 
          v-model="layoutWidgets"
          :group="{ name: 'lowcode', pull: 'clone' }"
          :sort="false"
          :clone="handleClone"
        >
          <template #item="{item}">
             <span class="widget-item">{{item.name}}</span>
          </template>
        </v-draggable>
    </div>
  </div>
</template>
<script>
import { useSchemesStore } from "/@/store/modules/scheme";
import shortid from "shortid";
const store = useSchemesStore();

export default defineComponent({
  setup() {
    let basicWidgets = ref([]);
    let layoutWidgets = ref([]);
    basicWidgets.value = store.handleGetBasicWidgets();
    layoutWidgets.value = store.handleGetLayoutWidgets();

    const handleClone = (e) => {
      return {
        id: shortid.generate(),
        ...e
      }
    }
    return {
      basicWidgets,
      layoutWidgets,
      handleClone,
    }
  },
})
</script>

<style lang="less">
.left-aside-container{
  flex-basis: 20%;
  .v-draggable-list{
    width: 100%;
    &-item{
      display: inline-block;
      width: 40%;
      margin: 4px 4px;
    }
  }
  .widget-item{
    display: inline-block;
    width: 100%;
    cursor: pointer;
    background-color: rgb(255, 255, 255);
    border: 1px solid transparent;
    box-shadow: rgb(0 0 0 / 6%) 0px 1px 2px;
    border-radius: 4px;
    padding: 4px 4px;
  }
}
</style>
