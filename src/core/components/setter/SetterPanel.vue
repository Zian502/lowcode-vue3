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

    const handleChange = ({value, props}={}) => {
      console.log(value)
      console.log(props)
      const setFieldsPath = props.setFieldsPath;
      let field = null
      let handleValue = value
      if(value.indexOf('-')!==-1){
        field = value.split('-')[0]
        handleValue = value.split('-')[1]
      }
      if(Array.isArray(setFieldsPath) && setFieldsPath.length > 1) {
        setFieldsPath.forEach((item, index) => {
          if(item.indexOf(field) !== -1){
            store.setFieldValue({
              [setFieldsPath[index]]: handleValue
            });
          }
        })
      } else if (Array.isArray(setFieldsPath) && setFieldsPath.length === 1) {
        store.setFieldValue({
          [setFieldsPath[0]]: handleValue
        });
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
