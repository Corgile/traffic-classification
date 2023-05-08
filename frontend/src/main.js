import {createApp} from 'vue'
import './style.css'
import App from './App.vue'


// 引入网络请求
import axios from 'axios';

// 引入路由
import router from './router/index'

// 引入全局自适应
import "amfe-flexible/index.js";


// 引入echarts
import * as echarts from 'echarts'


// 引入elementui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIcons from '@element-plus/icons-vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App);

// vue3 给原型上挂载属性
app.config.globalProperties.$echarts = echarts;

//引入element的图标
for (const name in ElIcons) {
    app.component(name, ElIcons[name])
}
app.use(router);
app.use(ElementPlus, {
    locale: zhCn,
});

app.mount('#app')


// createApp(App).mount('#app')
