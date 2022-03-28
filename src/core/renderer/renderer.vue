<template>
  <div class="renderer-container">
    <component :is="is" :compProps="config.props" :compMock="config.mock" :compStyles="config.styles" />
  </div>
</template>
<script>
export default {
  props: {
    is: {
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