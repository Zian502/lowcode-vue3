<template>
  <div class="basic-checkbox-container">
    <a-checkbox-group v-model:value="value" style="width: 100%">
       <a-checkbox 
        v-for="(item) in defaultList" 
        :value="item.value" 
        :key="item.value"
        >
        {{item.label}}
        </a-checkbox>
    </a-checkbox-group>
  </div>
</template>
<script>
import createReactive from '/@/core/utils/createReacitve'

export default defineComponent({
  props: {
    compProps: {
      type: Array,
      default: {}
    },
    compMock: {
      type: Object,
      default: {}
    },
    compStyles: {
      type: Object,
      default: {}
    },
    compLayouts: {
      type: Object,
      default: {}
    }
  },
  setup(props) {
    const {compProps, compMock, compStyles, compLayouts } = props;
    let data = createReactive({
      compProps,
      compMock,
      compStyles,
      compLayouts,
    });

    return {
      type: toRefs(data).type,
      value: toRefs(data).value,
      defaultValue:toRefs(data).defaultValue,
      defaultList: toRefs(data).defaultList,
      size: toRefs(data).size,
    }
  },
})
</script>

<style lang="less" scoped>

</style>
