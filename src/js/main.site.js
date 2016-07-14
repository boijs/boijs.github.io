// thirdparty modules
import Vue from 'vue';
import VueRouter from 'vue-router';
// application modules
import Index from './app/Index.vue';

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
    '/docs/:anchor': {
        name: 'docs',
        component: function(resolve) {
            require.ensure(['./app/Docs.vue'], function(require) {
                resolve(require("./app/Docs.vue"));
            }, 'docs');
        }
    },
    // 文档页
    '/plugins': {
        name: 'plugins',
        component: function(resolve) {
            require.ensure(['./app/Plugins.vue'], function(require) {
                resolve(require("./app/Plugins.vue"));
            }, 'plugins');
        }
    },
    // 文档页
    '/faq': {
        name: 'faq',
        component: function(resolve) {
            require.ensure(['./app/Faq.vue'], function(require) {
                resolve(require("./app/Faq.vue"));
            }, 'faq');
        }
    },
    // 文档页
    '/solutions': {
        name: 'solutions',
        component: function(resolve) {
            require.ensure(['./app/Solutions.vue'], function(require) {
                resolve(require("./app/Solutions.vue"));
            }, 'solutions');
        }
    },
    // 开发者文档页面
    '/api': {
        name: 'api',
        component: function(resolve) {
            require.ensure(['./app/Api.vue'], function(require) {
                resolve(require("./app/Api.vue"));
            }, 'api');
        }
    },
    // about页面
    '/about': {
        name: 'about',
        component: function(resolve) {
            require.ensure(['./app/About.vue'], function(require) {
                resolve(require("./app/About.vue"));
            }, 'about');
        }
    }
});
// 启动路由器
router.start(outerApp, '#app');

// 默认在首页
// router.go({
//     name: 'index'
// });
