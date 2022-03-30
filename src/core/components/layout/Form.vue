<template>
  <div class="layout-form-container">
    <a-form
      :model="model" 
      :layout="layout"
      :name="name"
      :validateMessages="validateMessages"
      >
       <draggable
          v-model="child.options.mock.columns"
          tag="a-row"
          :group="{ name: 'lowcode'}"
          item-key="id"
          handle=".ant-col"
          :componentData="{
            align,
            gutter,
            justify,
            wrap
          }"
          @add="handleAdd"
        >
          <template #item="{element}">
            <a-col :span="12"  class="border" style="height: 50px">
              <renderer :is="element.components" :globalOptions="worksheetData.options" :componentOptions="element.options" />
            </a-col>
          </template>
        </draggable>
    </a-form>
  </div>
</template>
<script lang="ts">
import createReactive from '/@/core/utils/createReacitve'
import draggable from "vuedraggable";

export default defineComponent({
  name: 'form',
  components: {
    draggable
  },
  props: {
    worksheetData: {
      type: Object,
      default: {}
    },
    child: {
      type: Object,
      default: {}
    },
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
      compMock,
    });

    const handleAdd = (e) => {
      console.log('add')
      console.log(e)
    }

    return {
      ...toRefs(props),
      model: toRefs(data).model,
      layout:toRefs(data).layout,
      name: toRefs(data).name,
      validateMessages: toRefs(data).validateMessages,
      columns: toRefs(data).columns,
      align: toRefs(data).align,
      gutter: toRefs(data).gutter,
      justify: toRefs(data).justify,
      wrap: toRefs(data).wrap,
      styles: toRefs(data).styles,
      handleAdd,
    }
  },
})
</script>

<style scoped lang="less">
.layout-form-container{
  width: 100%;
  .renderer-container{
    height: 100%;
  }
  .border{
    border-right: 1px solid #ccc;
    &:last-of-type{
      border: none;
    }
  }
}
</style>
