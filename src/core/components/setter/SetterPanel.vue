<template>
  <div class="settter-panel-container">
    <a-tabs 
      v-model:activeKey="mock.defaultValue"
      :centered="centered"
      >
      <a-tab-pane v-for="item in mock.defaultList" :key="item.key" :tab="item.tab">
        <div class="tab-panel-content">
          <template v-for="(item, index) in setters" :key="index">
            <renderer 
              :type="item.type" 
              :globalOptions="worksheetData.options" 
              :componentOptions="item" 
              @change="handleChange"
            />
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

    const handleChange = ({value, props, defaultList = []}={}) => {
      console.log('value', value)
      console.log('props', props)
      const setFieldsPath = props.setFieldsPath;
      let handleSetFieldsPath = [];
      let field = null;
      if(Array.isArray(value) ){
        if(Array.isArray(defaultList)){
          defaultList.forEach((item) => {
            handleSetFieldsPath.push({
              fieldPath: item.value.fieldPath,
              fieldValue: !item.value.fieldValue
            })
          });
          handleSetFieldsPath = [...handleSetFieldsPath, ...value];
        }
      } 
      console.log('handleSetFieldsPath', handleSetFieldsPath)
      if(Array.isArray(setFieldsPath) && setFieldsPath.length > 1) {
        handleSetFieldsPath.forEach((item, index) => {
          store.setFieldValue({
            [item.fieldPath]: item.fieldValue
          });
        })
      } else if (Array.isArray(setFieldsPath) && setFieldsPath.length === 1) {
        if(typeof value === 'object'){
           store.setFieldValue({
            [value.fieldPath]: value.fieldValue
          });
        } else {
          store.setFieldValue({
            [setFieldsPath[0]]: value
          });
        }
      }
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
}
</style>
