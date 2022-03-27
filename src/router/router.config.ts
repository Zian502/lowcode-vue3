
import type { RouteRecordRaw } from 'vue-router';
import BasicLayout from '/@/layouts/index.vue';

const constantRoutes: RouteRecordRaw[] = [{
  path: '/lowcode',
  name: 'lowcode',
  component: BasicLayout,
  meta: {
    title: '低代码'
  },
  children: [{
    path: '/lowcode/worksheet',
    name: 'worksheet',
    component: () => import("/@/pages/worksheet/index.vue"),
    meta: {
      title: '工作台'
    },
  }]
}]

export default constantRoutes;