<template>
  <div class="basic-input-container">
    <a-select 
      v-model:value="value" 
      :defaultValue="defaultValue"
      :allowClear="allowClear"
      :style="styles"
      >
      <a-select-option :value="item.value" v-for="(item) in defaultList" :key="item.value">
        {{item.label}}
      </a-select-option>
    </a-select>
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
    let data:any = createReactive({
      compProps,
      compMock,
      compStyles,
    });

    return {
      ...toRefs(data),
    }
  },
})
</script>

<style scoped lang="less">
.basic-input-container{
  width: 100%;
}
</style>
