<template>
  <div class="basic-input-container">
    <template v-if="type === 'input'">
      <a-input 
        v-model:value="value"
        :defaultValue="defaultValue"
        :size="size" 
        :placeholder="placeholder"
        :auto-size="autoSize"
      />
    </template>
    <template v-if="type === 'textarea'">
      <a-textarea
        v-model:value="value"
        :defaultValue="defaultValue"
        :placeholder="placeholder"
        :auto-size="autoSize"
      />
    </template>
  </div>
</template>
<script lang="ts">
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
    console.log('data', data)
    return {
      type: toRefs(data).type,
      value: toRefs(data).value,
      defaultValue:toRefs(data).defaultValue,
      size: toRefs(data).size,
      placeholder: toRefs(data).placeholder,
      autoSize: toRefs(data).autoSize,
      layouts: toRefs(data).layouts,
    }
  },
})
</script>

<style scoped lang="less">
.basic-input-container{
  width: 100%;
  .ant-form-item{
    margin-bottom: 0;
  }
}
</style>
