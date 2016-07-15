<style lang='scss'>

@import "../../styles/libs/markdown.css";
@import "../../styles/libs/github.css";
@import "../../styles/main.site.scss";
$left-width: 25%;
.docs {
    padding-left: $left-width;
    .docs_index {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        background-color: $color_grey;
        width: $left-width;
        padding-top: 8rem;
        box-sizing: border-box;
        box-shadow: 2px 0 10px $color_shadow;
    }
    .docs_article {
        padding-left: 5%;
    }
}

</style>

<template>

<!-- header -->
<index-header :isfix='true'></index-header>
<div class="docs">
    <div class="docs_index">
        <doc-index v-bind:index='index' v-bind:active='$route.params.anchor'></doc-index>
    </div>
    <div class="docs_article">
        <doc-article v-bind:content='docs[$route.params.anchor]?docs[$route.params.anchor].content:docs.start.content'></doc-article>
    </div>
</div>

</template>

<script>

import IndexHeader from './components/index_header.vue';
import DocIndex from './components/doc_index.vue'
import DocArticle from './components/doc_article.vue'

export default {
    data: function() {
        let _index = [{
            anchor: 'install',
            title: '安装',
            subtitles: [{
                name: '安装',
                anchor: 'an-zhuang'
            }, {
                name: '兼容问题',
                anchor: 'jian-rong-wen-ti'
            }]
        }, {
            anchor: 'start',
            title: '起步',
            subtitles: [{
                name: 'boi编译兼容',
                anchor: 'boi-bian-yi-jian-rong'
            }, {
                name: 'boi脚手架',
                anchor: 'boi-jiao-shou-jia'
            }, {
                name: '使用脚手架搭建项目',
                anchor: 'shi-yong-jiao-shou-jia-da-jian-xiang-mu'
            }, {
                name: '编译项目文件',
                anchor: 'bian-yi-xiang-mu-wen-jian'
            }, {
                name: 'dev server',
                anchor: 'dev-server'
            }]
        },{
            anchor: 'config',
            title: '配置',
            subtitles: [{
                name: '配置文件',
                anchor: 'pei-zhi-wen-jian'
            },{
                name: 'spec配置项',
                anchor: 'spec-pei-zhi-xiang'
            },{
                name: 'serve配置项',
                anchor: 'serve-pei-zhi-xiang'
            },{
                name: '高级配置',
                anchor: 'gao-ji-pei-zhi'
            }]
        }];
        let _docs = {
            install: {
                content: require("../../docs/_install.md")
            },
            start: {
                content: require("../../docs/_start.md")
            },
            config: {
                content: require("../../docs/_config.md")
            }
        };
        return {
            docs: _docs,
            index: _index
        }
    },
    created: function() {
        // let
    },
    components: {
        IndexHeader,
        DocIndex,
        DocArticle
    }
};

</script>
