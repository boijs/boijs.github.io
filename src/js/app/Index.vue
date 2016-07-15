<style lang='scss'>
@import "../../styles/main.site.scss";
</style>

<template>
<!-- header -->
<index-header v-bind:isfix='true'></index-header>
<!-- banner -->
<index-banner></index-banner>
<!-- introduction -->
<index-intro></index-intro>
<!-- feature -->
<index-feature></index-feature>
<!-- examples -->
<index-sample></index-sample>
<!-- footer -->
<index-footer></index-footer>
</template>

<script>

import IndexHeader from './components/index_header.vue';
import IndexBanner from './components/index_banner.vue';
import IndexIntro from './components/index_intro.vue';
import IndexFeature from './components/index_feature.vue';
import IndexSample from './components/index_sample.vue';
import IndexFooter from './components/index_footer.vue';


export default {
    components: {
        IndexHeader,
        IndexBanner,
        IndexIntro,
        IndexFeature,
        IndexSample,
        IndexFooter
    }
}

</script>
