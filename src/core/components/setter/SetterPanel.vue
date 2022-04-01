<template>
  <div class="settter-panel-container">
    <a-tabs 
      v-model:activeKey="mock.defaultValue"
      :centered="centered"
      >
      <a-tab-pane v-for="item in mock.defaultList" :key="item.key" :tab="item.tab">
        <a-from>
          <template v-for="(item, index) in recordWidget" :key="index">
            <a-form-item>
              <renderer :is="item.components"></renderer>
            </a-form-item>
          </template>
        </a-from>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import renderer from "../../renderer/renderer.vue";

export default defineComponent({
  components: { renderer },
  name: 'SetterPanel',
  props: {
    recordWidget: {
      type: Object,
      default: {}
    },
    setterData: {
      type: Object,
      default: {}
    }
  },
  setup(props) {
    const {
      setterData,
      recordWidget
    } = props;

    return {
      ...toRefs(setterData.panel.props),
      panel: toRefs(setterData.panel),
      mock: toRefs(setterData.panel).mock,
      recordWidget,
    }
  },
})
</script>
<style lang="less" scoped>
.settter-panel-container{
  background: #fff;
}
</style>
