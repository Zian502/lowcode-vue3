<template>
  <div class="layout-grid-container pad-0-18">
   <a-row
      :align="align"
      :gutter="gutter"
      :justify="justify"
      :wrap="wrap"
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
          style="width: 100%;"
          >
          <template #item="{element}">
            <a-col :span="12" class="border h-46 flex-ali-cen">
              <renderer layout="grid" :type="element.type" :globalOptions="worksheetData.options" :componentOptions="element.options" />
            </a-col>
          </template>
        </draggable>
   </a-row>
  </div>
</template>
<script lang="ts">
import createReactive from '/@/core/utils/createReacitve'
import draggable from "vuedraggable";

export default defineComponent({
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
      compMock
    });

    return {
      ...toRefs(props),
      columns: toRefs(data).columns,
      align: toRefs(data).align,
      gutter: toRefs(data).gutter,
      justify: toRefs(data).justify,
      wrap: toRefs(data).wrap,
      styles: toRefs(data).styles,
    }
  },
})
</script>

<style scoped lang="less">
.layout-grid-container{
  width: 100%;
  .renderer-container{
    height: 100%;
  }
  .border{
    border-right: 1px solid #EEE;
    &:last-of-type{
      border: none;
    }
  }
} 
</style>
