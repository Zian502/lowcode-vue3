<template>
  <div class="renderer-container">
    <component :is="is" :compProps="componentOptions.props" :compMock="componentOptions.mock" :compStyles="componentOptions.styles" />
  </div>
</template>
<script>
export default {
  props: {
    is: {
      type: String,
      default: ''
    },
    globalOptions: {
      type: Object,
      default: {}
    },
    componentOptions: {
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