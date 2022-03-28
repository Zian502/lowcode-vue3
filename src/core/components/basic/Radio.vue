<template>
  <div class="basic-input-container">
    <a-radio-group 
      v-model:value="value" 
      :defaultValue="defaultValue"
      :size="size"
      :button-style="buttonStyle"
      >
      <template v-if="buttonStyle === 'outline'">
        <a-radio 
          :value="item.value" 
          v-for="(item) in defaultList" 
          :key="item.value"
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
import createReactive from '/@/core//utils/createReacitve'

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
    }
  },
  setup(props) {
    const {compProps, compMock, compStyles } = props;
    let data:any = createReactive({
      compProps,
      compMock,
      compStyles,
    });

    const handleChange = (e) => {
      const value = e.target.value;
      data.value = value
    }

    return {
      ...toRefs(data),
      handleChange,
    }
  },
})
</script>

<style scoped>

</style>
