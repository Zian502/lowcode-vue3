<template>
  <div class="basic-checkbox-container flex-ali-cen">
    <span v-if="layout === 'general'" :class="labelClass">{{label}}</span>
    <a-checkbox-group 
      v-model:value="value" 
      :style="styles"
      @change="handleChange"
      >
        <a-checkbox 
        v-for="(item) in defaultList" 
        :value="item.value" 
        :key="item.value"
        :disabled="!!disabled"
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
  setup(props, { emit }) {

    const {compProps, compMock, compStyles, compLayouts } = props;
    let data = createReactive({
      compProps,
      compMock,
      compStyles,
      compLayouts,
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
      const value = e.target ? e.target.value : e;
      emit('change', {
        value,
        props,
        defaultList: toRefs(data).defaultList.value
      })
    }

    return {
      type: toRefs(data).type,
      label: toRefs(data).label,
      value: toRefs(data).value,
      defaultValue:toRefs(data).defaultValue,
      defaultList: toRefs(data).defaultList,
      size: toRefs(data).size,
      disabled: !!toRefs(data).disabled,
      styles: toRefs(data).styles,
      labelClass,
      handleChange,
    }
  },
})
</script>

<style lang="less" scoped>

</style>
