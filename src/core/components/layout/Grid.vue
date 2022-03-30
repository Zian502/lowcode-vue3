<template>
  <div class="layout-grid-container">
   <a-row
      :align="align"
      :gutter="gutter"
      :justify="justify"
      :wrap="wrap"
      >
        <slot></slot>
   </a-row>
  </div>
</template>
<script lang="ts">
import createReactive from '/@/core/utils/createReacitve'

export default defineComponent({
  name: 'grid',
  props: {
    compProps: {
      type: Object,
      default: {}
    },
    compMock: {
      type: Object,
      default: {}
    }
  },
  setup(props) {
    const { compProps, compMock } = props;
    let data = createReactive({
      compProps,
      compMock
    });

    return {
      align: toRefs(data).align,
      gutter: toRefs(data).gutter,
      justify: toRefs(data).justify,
      wrap: toRefs(data).wrap,
      styles: toRefs(data).styles,
    }
  },
})
</script>

<style scoped lang="less">
.layout-grid-container{
  width: 100%;
}
</style>
