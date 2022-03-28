<template>
  <div class="right-aside-container">
    <raw-displayer :value="generateWidgets" />
  </div>
</template>
<script>
import { useSchemesStore } from '/@/store/modules/scheme';

const store = useSchemesStore();

export default defineComponent({
  setup() {
    let generateWidgets = ref([])
    const unsubscribe = store.$onAction((
      {
        name,   //action 函数的名称
        store,  //store 实例
        args,   //action 函数参数数组
        after,  //钩子函数，在action函数执行完成返回或者resolves后执行
        onError // 钩子函数，在action函数报错或者rejects后执行
      }) => {
        // console.log('name===>', name)
        // console.log('args===>', args)
        // console.log('store===>', store)

        after(result => {
          generateWidgets.value = store.generateWidgets
        })

        onError(error => {
          
        })
      },
      false  //默认是false，设置为true的时候，组件卸载时，订阅依然有效
    )
    // 同样可以通过调用store.$onAction返回值，即unsubscribe 进行停止订阅
    // unsubscribe() // 手动停止订阅

    return {
      generateWidgets
    }
  },
})
</script>
<style lang="less" scoped>
.right-aside-container{
  flex: 1 0 auto;
  width: 33%;
}
</style>
