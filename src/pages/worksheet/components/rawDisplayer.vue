<template>
  <div class="raw-displayer">
    <h3>{{ title }}</h3>
    <pre>{{ valueString }}</pre>
  </div>
</template>
<script>
export default defineComponent({
  name: 'raw-displayer',
  props: {
    title: {
      required: true,
      type: String
    },
    value: {
      required: true
    }
  },
  setup(props) {
    const valueString =  computed(() => {
      return  JSON.stringify(props.value, null, 2);
    })

    return {
      ...toRefs(props),
      valueString,
    }
  },
})
</script>
<style lang="less" scoped>
pre {
  text-align: start;
}
</style>