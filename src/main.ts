import { createApp } from 'vue'
import App from './App.vue'
import {router} from '/@/router'
import { store } from '/@/store';
import '/@/styles/index.less';
import { ConfigProvider, Row } from 'ant-design-vue';
import withInstall from '/@/core/utils/withInstall';
import { General, Form } from './core/components';

const app = createApp(App);

app.use(ConfigProvider).use(Row).use(withInstall(General)).use(withInstall(Form));

app.use(router);

app.use(store);

app.mount('#app');
