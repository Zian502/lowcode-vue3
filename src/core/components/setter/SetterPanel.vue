<template>
  <div class="settter-panel-container">
    <a-tabs 
      v-model:activeKey="mock.defaultValue"
      :centered="centered"
      >
      <a-tab-pane v-for="item in mock.defaultList" :key="item.key" :tab="item.tab">
        <div class="tab-panel-content">
          <template v-for="(v, index) in setters" :key="index">
            <template v-if="v.tabIndex === item.key">
              <renderer 
                :type="v.type" 
                :globalOptions="worksheetData.options" 
                :componentOptions="v" 
                @change="handleChange"
              />
            </template>
          </template>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import { useSchemesStore } from '/@/store/modules/scheme';

const store = useSchemesStore();

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

    const handleChange = ({value, props, defaultList}={}) => {
      console.log('value', value)
      console.log('props', props)
      const setterFieldsPath = props.compMock.setterFieldsPath;
      setterFieldsPath.forEach((item) => {
        if(Array.isArray(value)) {
          if(defaultList.length > 0) {
            defaultList.forEach((v)=> {
              store.setFieldValue({
                [v.value]: false
              });
            });
          };
          if(value.length > 0){
              value.forEach((v) => {
                store.setFieldValue({
                  [v]: true
              });
            });
          };
        } else {
          store.setFieldValue({
            [item.destFieldPath]: value
          });
        }
      });
    }

    return {
      ...toRef(props),
      ...toRefs(setterData.panel.props),
      panel: toRefs(setterData.panel),
      mock: toRefs(setterData.panel).mock,
      setters,
      handleChange,
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
  .renderer-container{
    margin-bottom: 20px;
  }
}
</style>
