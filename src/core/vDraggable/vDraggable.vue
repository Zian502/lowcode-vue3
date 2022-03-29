<template>
  <div class="v-draggable-container">
    <draggable
      class="v-draggable-list"
      v-model="draggableList"
      :ghostClass="ghostClass"
      :group="group"
      :sort="sort"
      :clone="clone"
      :itemKey="itemKey"
      :tag="tag"
      :componentData="componentData"
      @start="handleStart"
      @add="handleAdd"
      @end="handleEnd"
      >
      <template #item="{element}">
        <div class="v-draggable-list-item">
          <slot name="item" :item="element"></slot>
        </div>
      </template>
    </draggable>
  </div>
</template>
<script>
import draggable from "vuedraggable";

export default defineComponent({
  name: 'vDraggable',
  components: {
    draggable
  },
  props: {
    list: {
      type: Array,
      default: []
    },
    modelValue: {
      type: Array,
      default: []
    },
    ghostClass: {
      type: String,
      default: 'ghost'
    },
    group: {
      type: Object,
      default: {
        name: 'lowcode'
      }
    },
    sort: {
      type: Boolean,
      default: true
    },
    clone: {
      type: Function,
      default: () =>{}
    },
    itemKey: {
      type: String,
      default: 'id'
    },
    tag: {
      type: String,
      default: 'div'
    },
    componentData: {
      type: Object,
      default: {}
    }
  },
  emits: ['start', 'add', 'end', ''],
  setup(props, {emit}) {

    let draggableList = ref([]);
    draggableList.value = props.modelValue;

    const handleStart = (e) => {
      emit('start',e)
    }
    const handleAdd = (e) => {
      emit('add',e)
    }
    const handleEnd = (e) => {
      emit('end',e)
    }

    watch(() => draggableList, (nv) => {
      emit('update:modelValue', nv)
    },{
      deep: true
    })


    return {
      ...toRefs(props),
      draggableList,
      handleStart,
      handleAdd,
      handleEnd,
    }
  },
})
</script>
