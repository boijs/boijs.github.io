<style lang='scss'>

@import "../../../styles/_mixins.scss";
$color_ligthblue: #96c4e6;
$color_darkblue: #315788;
.examples {
    font-size: 2rem;
    margin-top: 1em;
    padding: 2.5rem 4rem 0;
    color: $color_darkblue;
    .title {
        margin: 0;
        margin-bottom: 1em;
        text-align: center;
    }
    .code {
        background-color: rgba(0, 0, 0, 0.7);
        color: #3dc14b;
        text-align: left;
        font-size: 0.75em;
        white-space: pre-line;
        padding: 0.5em 2em;
        line-height: 1.5;
    }
    .comment{
        color: #909090;
    }
    .entry{
        font-size: 0.75em;
        margin: 0;
    }
    .more{
        text-align: center;
        margin-top: 2em;
        .link{
            font-size: 1.2em;
            padding: 0.5em 3em;
            box-sizing: border-box;
            border: solid 1px $color_darkblue;
            border-radius: 4px;
            background-color: #d3e5f3;
            display: inline-block;
            vertical-align: middle;
        }
    }
}

</style>

<template>

<section class="examples">
    <h2 class="title">示例</h2>
    <pre class="code">
        <code>
            <span class="comment">// 使用脚手架搭建一个新的webapp</span>
            $ boi new webapp
            $ cd webapp
            <span class="comment">//启动dev server</span>
            $ boi serve
        </code>
    </pre>
    <p class="entry">
        打开浏览器访问<code>localhost:8888</code>便可以看到欢迎页面
    </p>
    <div class="more">
        <a class='link' href="/docs">查看更多功能</a>
    </div>
</section>

</template>

<script>

export default {};

</script>
