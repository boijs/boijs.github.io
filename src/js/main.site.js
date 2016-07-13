// thirdparty modules
import Vue from 'vue';
import VueRouter from 'vue-router';
// application modules
import Index from './app/Index.vue';
import Docs from './app/Docs.vue';
import Api from './app/Api.vue';
import About from './app/About.vue';
import Plugins from './app/Plugins.vue';
import Faq from './app/Faq.vue';
import Solutions from './app/Solutions.vue';

Vue.use(VueRouter);

let router = new VueRouter();

// 空白组件作为路由容器
let outerApp = Vue.extend({});

// 路由配置
router.map({
    // 首页
    '/': {
        name: 'index',
        component: Index
    },
    // 文档页
    '/docs': {
        name: 'docs',
        component: Docs
    },
    // 文档页
    '/plugins': {
        name: 'plugins',
        component: Plugins
    },
    // 文档页
    '/faq': {
        name: 'faq',
        component: Faq
    },
    // 文档页
    '/solutions': {
        name: 'solutions',
        component: Solutions
    },
    // 开发者文档页面
    '/api': {
        name: 'api',
        component: Api
    },
    // about页面
    '/about': {
        name: 'about',
        component: About
    }
});
// 启动路由器
router.start(outerApp, 'body');

// 默认在首页
// router.go({
//     name: 'index'
// });
