import 'css/index.scss';
import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI, {
   size: 'mini'
});

import App from 'views/App.vue';
import router from 'src/router';
import mixins from 'mixins';

Vue.mixin(mixins);

//注册基础组件
import 'components/base/globals';

Vue.prototype.moment = moment;

//注册全局变量、全局函数
import base from 'service/base';

Vue.use(base);

Vue.config.productionTip = false;

new Vue({
   el: '#App',
   router,
   render: h => h(App)
});
