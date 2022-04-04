<template>
  <div class="basic-input-container flex-ali-cen">
    <span v-if="layout === 'general'" :class="labelClass">{{label}}</span>
    <template v-if="type === 'input'">
      <a-input 
        v-model:value="value"
        :defaultValue="defaultValue"
        :size="size" 
        :placeholder="placeholder"
        :auto-size="autoSize"
        :style="styles"
        @change="handleChange"
      />
    </template>
    <template v-if="type === 'textarea'">
      <a-textarea
        v-model:value="value"
        :defaultValue="defaultValue"
        :placeholder="placeholder"
        :auto-size="autoSize"
        :style="styles"
        @change="handleChange"
      />
    </template>
  </div>
</template>
<script lang="ts">
import createReactive from '/@/core/utils/createReacitve'

export default defineComponent({
  props: {
    layout: {
      type: String,
      default: 'layout'
    },
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
    },
    setFieldsPath: {
      type:Array,
      default: []
    }
  },
  emits: ['change'],
  setup(props, {emit}) {
        const {compProps, compMock, compStyles, compLayouts } = props;
    let data = createReactive({
      compProps,
      compMock,
      compStyles,
      compLayouts,
    });

    // 方法 
    const handleChange = (e) => {
      const value = e.target.value;
      emit('change', {
        value,
        props
      })
    }

    // 计算属性
    const labelClass = computed(() => {
      return [
        'basic-label',
        {
          'colon' : props.layout === 'general'
        },
        {
         'required' : toRefs(data).required
        }
      ]
    });

    return {
      type: toRefs(data).type,
      label: toRefs(data).label,
      value: toRefs(data).value,
      defaultValue:toRefs(data).defaultValue,
      size: toRefs(data).size,
      placeholder: toRefs(data).placeholder,
      autoSize: toRefs(data).autoSize,
      layouts: toRefs(data).layouts,
      styles: toRefs(data).styles,
      labelClass,
      handleChange,
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
