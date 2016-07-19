<style lang='scss'>
@import "../../styles/_mixins.scss";
.solutions{
    padding: 2rem;
    max-width: 1024px;
    margin: 0 auto;
    font-size: 1.5rem;
}
</style>
<template>
    <!-- header -->
    <index-header v-bind:isfix='true'></index-header>
    <div class="solutions">
        <div class="head"></div>
        <div class="body" v-html='content'></div>
    </div>
</template>
<script>
    import IndexHeader from './components/index_header.vue';
    export default {
        data: function(){
            let _content = require('../../md/solutions/_index.md');
            return {
                content: _content
            }
        },
        components: {
            IndexHeader
        }
    };
</script>
