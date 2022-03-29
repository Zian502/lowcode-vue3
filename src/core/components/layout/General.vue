<template>
  <div class="layout-general-container">
   
  </div>
</template>
<script lang="ts">
import createReactive from '/@/core/utils/createReacitve'

export default defineComponent({
  props: {
    compProps: {
      type: Object,
      default: {}
    },
    compMock: {
      type: Object,
      default: {}
    },
    compStyles: {
      type: Object,
      default: {}
    }
  },
  setup(props) {
    const {compProps, compMock, compStyles } = props;
    let data = createReactive({
      compProps,
      compMock,
      compStyles,
    });

    return {
      value: toRefs(data).value,
      defaultValue:toRefs(data).defaultValue,
      defaultList: toRefs(data).defaultList,
      allowClear: toRefs(data).allowClear,
      styles: toRefs(data).styles,
    }
  },
})
</script>

<style scoped lang="less">
.basic-input-container{
  width: 100%;
}
</style>
