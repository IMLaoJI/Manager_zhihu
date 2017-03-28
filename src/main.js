import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-default/index.css';    // 默认主题
import '../static/css/theme-green/index.css'; // 浅绿色主题
import VueResource from 'vue-resource';
import store from './vuex/store'
import Vuex from 'vuex'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import 'font-awesome/css/font-awesome.min.css'
import Mock from './mock'
Mock.bootstrap();

Vue.use(VueResource);
Vue.use(Vuex)
Vue.use(ElementUI);
router.beforeEach((to, from, next) => {
    //NProgress.start();
    console.log(to);
    if (to.path == '/login') {
        localStorage.removeItem('ms_username');
    }
    var user = localStorage.getItem('ms_username');
    console.log(user);
    if (!user && to.path != '/login') {
        next({ path: '/login' })
    } else {
        next()
    }
})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');