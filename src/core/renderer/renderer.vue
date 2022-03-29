<template>
  <div class="renderer-container">
    <component :is="is" :compProps="options.props" :compMock="options.mock" :compStyles="options.styles" />
  </div>
</template>
<script>
export default {
  props: {
    is: {
      type: String,
      default: ''
    },
    options: {
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
  margin-bottom: 5px;
}
</style>