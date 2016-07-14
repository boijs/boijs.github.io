<style lang='scss'>

@import "../../../styles/_mixins.scss";
$color_ligthblue: #96c4e6;
$color_darkblue: #315788;
.banner {
    @include box-shadow( 0 2px 15px rgba(51, 51, 51, 0.5));
    text-align: center;
    background-color: $color_ligthblue;
    padding: 2rem;
    .logo_canvas {
        margin: 1rem auto;
    }
    .entry {
        font-size: 2rem;
        color: $color_darkblue;
        p {
            font-size: 1em;
            height: 1.5em;
            line-height: 1.5em;
            margin: 0;
        }
    }
    .startup {
        background-color: rgba(0, 0, 0, 0.7);
        color: #3dc14b;
        @include strictHeight(4rem);
        .startup_code {
            font-size: 1.5rem;
            height: 1.5rem;
            line-height: 1.5rem;
            font-weight: 600;
        }
    }
}

</style>

<template>

<header class="banner" role='banner'>
    <logo-canvas v-bind:size='size_logo_canvas'></logo-canvas>
    <div class="entry">
        <p>优雅的前端工程化解决方案</p>
        <p>致力于构建纯净、易维护、易部署的Webapp</p>
    </div>
    <pre class="startup">
            <code class="startup_code">$ npm install boi-cli -g</code>
        </pre>
</header>

</template>

<script>

import LogoCanvas from './_logo_canvas.vue';
export default {
    data: function() {
        let size_logo_canvas = {
            width: 200,
            height: 200
        };

        return {
            size_logo_canvas
        };
    },
    components: {
        LogoCanvas
    }
};

</script>
