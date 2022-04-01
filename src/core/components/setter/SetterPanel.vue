<template>
  <div class="settter-panel-container">
    <a-tabs 
      v-model:activeKey="mock.defaultValue"
      :centered="centered"
      >
      <a-tab-pane v-for="item in mock.defaultList" :key="item.key" :tab="item.tab">
        <div class="tab-panel-content">
          <a-from>
            <a-form-item
                v-for="(item, index) in setters" :key="index"
                :label="item.label"
              >
                <renderer :type="item.type" :globalOptions="worksheetData.options" :componentOptions="item" />
            </a-form-item>
          </a-from>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>

export default defineComponent({
  name: 'SetterPanel',
  props: {
    worksheetData: {
      type: Object,
      default: {}
    },
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
    } = props;

    let setters = ref([]);

    watch(() => props.recordWidget, (val)=>{
      setters.value = val?.options?.setters
    },{
      deep: true
    })

    return {
      ...toRef(props),
      ...toRefs(setterData.panel.props),
      panel: toRefs(setterData.panel),
      mock: toRefs(setterData.panel).mock,
      setters,
    }
  },
})
</script>
<style lang="less" scoped>
.settter-panel-container{
  background: #fff;
  .tab-panel-content{
    padding: 0 20px;
  }
}
</style>
