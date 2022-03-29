import { createApp } from 'vue'
import App from './App.vue'
import {router} from '/@/router'
import { store } from '/@/store';
import '/@/styles/index.less';
import { Row } from 'ant-design-vue';

const app = createApp(App);

app.use(Row);

app.use(router);

app.use(store);

app.mount('#app');
