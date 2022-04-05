<template>
  <div class="basic-radio-container flex-ali-cen">
    <span v-if="layout === 'general'" :class="labelClass">{{label}}</span>
    <a-radio-group 
      v-model:value="value" 
      :defaultValue="defaultValue"
      :size="size"
      :style="styles"
      :hidden="hidden"
      :button-style="buttonStyle"
      @change="handleChange"
      >
      <template v-if="buttonStyle === 'outline'">
        <a-radio 
          :value="item.value" 
          v-for="(item) in defaultList" 
          :key="item.value"
          :disabled="disabled"
          >
          {{item.label}}
        </a-radio>
      </template>
      <template v-else>
        <a-radio-button 
          :value="item.value" 
          v-for="(item) in defaultList" 
          :key="item.value"
          >
          {{item.label}}
        </a-radio-button>
      </template>
    </a-radio-group>
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
      defaultValue: toRefs(data).defaultValue,
      defaultList: toRefs(data).defaultList,
      size: toRefs(data).size,
      buttonStyle: toRefs(data).buttonStyle,
      disabled: toRefs(data).disabled,
      hidden: toRefs(data).hidden,
      layouts: toRefs(data).layouts,
      styles: toRefs(data).styles,
      labelClass,
      handleChange,
    }
  },
})
</script>

<style scoped lang="less">
.basic-radio-container{
  width: 100%;
}
</style>
