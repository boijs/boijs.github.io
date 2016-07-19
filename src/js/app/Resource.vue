<style lang='scss'>
@import "../../styles/_mixins.scss";
.content{
    max-width: 1024px;
    margin: 0 auto;
    padding: 2rem;
    .head{
        font-size: 2rem;
        font-weight: 600;
    }
    .body{
        padding: 1rem;
        font-size: 1.2rem;
        line-height: 1.5;
    }
}
</style>
<template>
    <!-- header -->
    <index-header v-bind:isfix='true'></index-header>
    <div class="content">
        <div class="head">boi资源汇总</div>
        <div class="body" v-html='content'></div>
    </div>
</template>
<script>
    import IndexHeader from './components/index_header.vue';
    export default {
        data: function(){
            let _content = require('../../md/resource/_index.md');
            return {
                content: _content
            };
        },
        components: {
            IndexHeader
        }
    };
</script>
