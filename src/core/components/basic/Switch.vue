<template>
  <div class="basic-switch-container flex-ali-cen">
    <span v-if="layout === 'general'" :class="labelClass">{{label}}</span>
    <a-switch
      v-model:checked="checked" 
      :size="size"
      :disabled="!!disabled"
      :loading="loading"
      :autofocus="autofocus"
      :style="styles"
    />    
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
  setup(props, { emit }) {
    const {compProps, compMock, compStyles } = props;
    let data = createReactive({
      compProps,
      compMock,
      compStyles,
    });

    // 计算属性
    const labelClass = computed(() => {
      console.log('props.layout', props.layout)
      return [
        'basic-label',
        {
          'colon' : props.layout === 'general'
        },
        {
         'required' : !!toRefs(data).required.value
        }
      ]
    });

    // 方法 
    const handleChange = (e) => {
      const value = e.target.value;
      emit('change', {
        value,
        props
      })
    }

    return {
      layout: props.layout,
      label: toRefs(data).label,
      checked: toRefs(data).checked,
      size:toRefs(data).size,
      disabled: toRefs(data).disabled,
      loading: toRefs(data).loading,
      autofocus: toRefs(data).autofocus,
      disabled: !!toRefs(data).disabled,
      styles: toRefs(data).styles,
      layouts: toRefs(data).layouts,
      labelClass,
      handleChange,
    }
  },
})
</script>

<style scoped lang="less">
.basic-switch-container{
  width: 100%;
}
</style>
