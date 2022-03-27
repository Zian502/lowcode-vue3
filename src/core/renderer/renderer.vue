<template>
  <div class="renderer-container">
    <component :is="compName" />
  </div>
</template>
<script>
export default {
  props: {
    compName: {
      type: String,
      default: ''
    },
    config: {
      type: Object,
      default: {}
    }
  },
  setup(props) {

    return {
      ...toRefs(props)
    }  
  },
}
</script>
<style lang="less" scoped>
.renderer-container{
  width: 100%;
}
</style>