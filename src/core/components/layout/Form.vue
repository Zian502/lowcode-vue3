<template>
  <div class="layout-form-container">
    <a-form
      :model="model" 
      :layout="layout"
      :name="name"
      :validateMessages="validateMessages"
      >
       <a-form-item 
        :label="label"
        >
        <a-row>
          <a-col :span="12">
            <slot></slot>
          </a-col>
          <a-col :span="12">
            <slot></slot>
          </a-col>
        </a-row>
       </a-form-item>  
    </a-form>
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
      model: toRefs(data).model,
      layout:toRefs(data).layout,
      name: toRefs(data).name,
      validateMessages: toRefs(data).validateMessages,
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
