<template>
  <div class="renderer-container">
    <component 
      :is="compInstance" 
      :layout="layout"
      :compProps="componentOptions.props" 
      :compMock="componentOptions.mock" 
      :compStyles="componentOptions.styles" 
      :compLayouts="componentOptions.layouts"
      :setFieldsPath="componentOptions.setFieldsPath"
      :worksheetData="worksheetData"
      :child="child"
      @change="handleChange"
      />
  </div>
</template>
<script>
import cache from '/@/core/constants/components'

export default {
  props: {
    layout: {
      type: String,
      default: 'general'
    },
    type: {
      type: String,
      default: ''
    },
    worksheetData: {
      type: Object,
      default: {}
    },
    child: {
      type: Object,
      default: {}
    },
    globalOptions: {
      type: Object,
      default: {}
    },
    componentOptions: {
      type: Object,
      default: {}
    },
  },
  emits: ['change'],
  setup(props, {emit}) {
    const {
      type
    } = props;

    let compType = ref('');
    let compName = ref('');
    let compInstance = ref(null);
    compType.value = type.split('-')[0];
    compName.value = type.split('-')[1];
    compInstance.value = cache.get(compName.value);

    const handleChange = (value) => {
      emit('change', value)
    }

    return {
      ...toRefs(props),
      compType,
      compName,
      compInstance,
      handleChange
    }  
  },
}
</script>
<style lang="less" scoped>
.renderer-container{
  width: 100%;
  display: flex;
  align-items: center;
}
</style>