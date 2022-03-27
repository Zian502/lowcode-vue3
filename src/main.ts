import { createApp } from 'vue'
import App from './App.vue'
import {router} from '/@/router'
import { store } from '/@/store';
import '/@/styles/index.less';

const app = createApp(App);

console.log(app)

app.use(router);

app.use(store);

app.mount('#app');
