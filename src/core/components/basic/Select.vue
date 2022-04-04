<template>
  <div class="basic-select-container flex-ali-cen">
    <span v-if="layout === 'general'" :class="labelClass">{{label}}</span>
    <a-select 
      v-model:value="value" 
      :defaultValue="defaultValue"
      :allowClear="allowClear"
      :disabled="!!disabled"
      :style="styles"
      @change="handleChange"
      >
      <a-select-option 
        :value="item.value" 
        v-for="(item) in defaultList" 
        :key="item.value"
        >
        {{item.label}}
      </a-select-option>
    </a-select> 
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
      value: toRefs(data).value,
      label: toRefs(data).label,
      defaultValue:toRefs(data).defaultValue,
      defaultList: toRefs(data).defaultList,
      allowClear: toRefs(data).allowClear,
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
.basic-select-container{
  width: 100%;
}
</style>
