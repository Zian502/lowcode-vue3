<template>
  <div class="basic-switch-container">
    <a-switch
      v-model:checked="checked" 
      :size="size"
      :disabled="disabled"
      :loading="loading"
      :autofocus="autofocus"
      :style="styles"
    />
  </div>
</template>
<script lang="ts">
import createReactive from '/@/core//utils/createReacitve'

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
      checked: toRefs(data).checked,
      size:toRefs(data).size,
      disabled: toRefs(data).disabled,
      loading: toRefs(data).loading,
      autofocus: toRefs(data).autofocus,
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
