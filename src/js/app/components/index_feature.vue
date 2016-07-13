<style lang='scss'>
@import "../../../styles/_mixins.scss";
$color_ligthblue: #96c4e6;
$color_darkblue: #315788;

.feature{
    margin-top: 1em;
    padding: 2.5rem 4rem 0;
    font-size: 2rem;
    color: #315788;
    &::after{
        content: '';
        display: block;
        height: 1px;
        width: 100%;
        background-color: #eee;
        margin-top: 2em;
    }
    .title{
        margin: 0;
        text-align: center;
        margin-bottom: 1em;
    }
    .list{
        @include ulWithoutStyle();
        display: flex;
        .item{
            flex:1;
            background-color: #d3e5f3;
            margin: 0 0.5em;
            padding: 0.5em;
            @include border-radius(4px);
        }
        .subtitle{
            text-align: center;
            margin: 0;
            margin-bottom: 0.5em;
        }
        .sublist{
            font-size: 0.65em;
            padding: 0;
            padding-left: 1.5em;
        }
        .subitem{
            line-height: 1.5;
        }
    }
}

</style>

<template>

<section class="feature">
    <h2 class="title">boi功能特性</h2>
    <ul class="list">
        <li class="item">
            <h4 class="subtitle">自动化编译</h4>
            <ul class="sublist">
                <li class="subitem">图片压缩；</li>
                <li class="subitem">内容嵌入；</li>
                <li class="subitem">CSS预编译；</li>
                <li class="subitem">JS压缩合并；</li>
                <li class="subitem">ES6/7规范转译；</li>
                <li class="subitem">支持多种模块化方案；</li>
            </ul>
        </li>
        <li class="item">
            <h4 class="subtitle">自动化部署</h4>
            <ul class="sublist">
                <li class="subitem">自动上传；</li>
                <li class="subitem">一键部署；</li>
                <li class="subitem">可配置CDN信息；</li>
                <li class="subitem">自动更新CDNurl；</li>
            </ul>
        </li>
        <li class="item">
            <h4 class="subtitle">提高开发效率</h4>
            <ul class="sublist">
                <li class="subitem">动态编译；</li>
                <li class="subitem">dev server；</li>
                <li class="subitem">mock server；</li>
                <li class="subitem">浏览器自动刷新；</li>
            </ul>
        </li>
        <li class="item">
            <h4 class="subtitle">丰富的扩展性</h4>
            <ul class="sublist">
                <li class="subitem">可定制的脚手架；</li>
                <li class="subitem">可定制的插件系统；</li>
                <li class="subitem">示例：<a href='#'>vue解决方案；</a></li>
                <li class="subitem">示例：<a href='#'>svg sprite解决方案；</a></li>
            </ul>
        </li>
    </ul>
</section>

</template>

<script>
export default {};
</script>
