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
    '/docs/:anchor/:subanchor': {
        name: 'docs',
        component: function(resolve) {
            require.ensure(['./app/Docs.vue'], function(require) {
                resolve(require("./app/Docs.vue"));
            }, 'docs');
        }
    },
    // 资源
    '/resource': {
        name: 'resource',
        component: function(resolve) {
            require.ensure(['./app/Resource.vue'], function(require) {
                resolve(require("./app/Resource.vue"));
            }, 'resource');
        }
    },
    // 解决方案
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
// 别名设置
// 动态路径匹配实名路径没有逻辑意义，只是为了url的干净
router.alias({
    '/docs': '/docs/a/b',
    '/docs/:anchor':'/docs/:anchor/b'
})
// 启动路由器
router.start(outerApp, '#app');
