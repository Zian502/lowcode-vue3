<template>
  <div class="right-aside-container">
    <setter-panel :worksheetData="worksheetData" :recordWidget="recordWidget" :setterData="setterData" />
  </div>
</template>
<script>
import { useSchemesStore } from '/@/store/modules/scheme';

const store = useSchemesStore();

export default defineComponent({
  setup() {
    let worksheetData = ref([])
    let setterData = ref([])
    let recordWidget = ref([])
    worksheetData.value = store.getWorksheetData
    setterData.value = store.getSetterData

    const unsubscribe = store.$onAction((
      {
        name,   //action 函数的名称
        store,  //store 实例
        args,   //action 函数参数数组
        after,  //钩子函数，在action函数执行完成返回或者resolves后执行
        onError // 钩子函数，在action函数报错或者rejects后执行
      }) => {
        after(result => {
          worksheetData.value = store.getWorksheetData
          setterData.value = store.getSetterData
          recordWidget.value = store.getRecordWidget
          console.log('recordWidget', recordWidget)
        })

        onError(error => {
          
        })
      },
      false  //默认是false，设置为true的时候，组件卸载时，订阅依然有效
    )
    // 同样可以通过调用store.$onAction返回值，即unsubscribe 进行停止订阅
    // unsubscribe() // 手动停止订阅

    return {
      worksheetData,
      setterData,
      recordWidget
    }
  },
})
</script>
<style lang="less" scoped>
.right-aside-container{
  flex: 1 0 auto;
  width: 25%;
  margin-left: 50px;
}
</style>
