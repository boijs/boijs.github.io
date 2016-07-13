<style lang='scss'>

$color_darkblue: #315788;
.intro {
    display: flex;
    flex-wrap: wrap;
    padding: 2.5rem 4rem 0;
    font-size: 2rem;
    color: $color_darkblue;
    margin-top: 1em;
    &::after{
        content: '';
        display: block;
        height: 1px;
        width: 100%;
        background-color: #eee;
        margin-top: 1em;
    }
    .title {
        flex-basis: 100%;
        text-align: center;
        margin: 0;
        margin-bottom: 1em;
    }
    .entry {
        flex: 1;
        text-align: justify;
        padding: 0 1rem;
        font-size: 0.75em;
        line-height: 1.5;
        margin: 0;
    }
}

</style>

<template>

<section class="intro">
    <h2 class="title">什么是boi？</h2>
    <p class="entry">
        <span>基于webpack内核的编译系统，丰富的扩展性和社区资源；</span>
        <span>框架不对项目代码做任何强制约束，构建纯净的web应用；</span>
        <span>支持多种模块化方案，包括ES6 Modules、CommonJS、AMD等。</span>
    </p>
    <p class="entry">
        boi本身是非常轻量且拥有良好的扩展性。开发者API可以支持不同类型不同需求的项目定制自己的脚手架、插件和代码规范等。
    </p>
</section>

</template>

<script>

export default {};

</script>
