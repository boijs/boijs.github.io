<style lang='scss'>

$left-width: 25%;
.docs{
    padding-left: $left-width;
    .docs_index{
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        background-color: lightgray;
        width: $left-width;
        padding-top: 8rem;
        box-sizing: border-box;
    }
    .docs_article{
        padding-left: 5%;
    }
}

</style>

<template>
    <!-- header -->
    <index-header></index-header>
    <div class="docs">
        <div class="docs_index">
            <doc-index v-bind:index='index' v-bind:active='$route.params.anchor'></doc-index>
        </div>
        <div class="docs_article">
            <doc-article v-bind:content = 'docs[$route.params.anchor].content'></doc-article>
        </div>
    </div>
</template>

<script>
    import IndexHeader from './components/index_header.vue';
    import DocIndex from './components/doc_index.vue'
    import DocArticle from './components/doc_article.vue'

    export default {
        data: function(){
            let _index = [
                {
                    anchor: 'start',
                    title: '起步'
                }
            ];
            let _docs = {
                start: {
                    title: _index.start,
                    content: require("../../docs/_start.md")
                }
            };
            return {
                docs: _docs,
                index: _index
            }
        },
        created: function(){
            // console.log(this.docs[this.$route.params.anchor].content)
        },
        components: {
            IndexHeader,
            DocIndex,
            DocArticle
        }
    };
</script>
