<style lang='scss'>
@import "../../../styles/_mixins.scss";

$height_logo: 5rem;
$padding_nav: 1rem;

.boi_nav {
    position: static;
    height: $height_logo+$padding_nav*2;
    .nav_box {
        background-color: #fff;
        height: $height_logo;
        padding: $padding_nav 0;
        position: fixed;
        width: 100%;
        @include box-shadow( 0 2px 15px rgba(51, 51, 51, 0.5));
        .logo {
            @include strictHeight($height_logo);
            overflow: hidden;
            position: absolute;
            top: 50%;
            left: 2rem;
            transform: translate(0, -50%);
        }
        .logo_box {
            vertical-align: middle;
            display: inline-block;
            width: $height_logo;
            height: $height_logo;
            background: url('../../../assets/images/logo.png') no-repeat;
            background-size: 100% 100%;
        }
        .logo_entry {
            color: $color_drakblue;
            font-size: 3.5rem;
            vertical-align: middle;
            display: inline-block;
            margin-left: 1rem;
            font-family: TrumpTownPro;
        }
        .bar {
            float: right;
            height: $height_logo;
            line-height: $height_logo;
            margin-right: 2rem;
        }
        .list {
            @include ulWithoutStyle();
        }
        .item {
            font-size: 1.5rem;
            display: inline-block;
            height: 1.5rem;
            line-height: 1.5rem;
            vertical-align: middle;
            margin: 0 1rem;
        }
        .navlink {
            color: $color_drakblue;
            @include linkWithoutStyle();
            &:hover,
            &:visited {
                @include linkWithoutStyle();
            }
        }
    }
}

</style>

<template>

<nav class="boi_nav">
    <div class="nav_box">
        <div class="logo">
            <a v-link="{name: 'index'}" class="logo_box">
                <!-- <img src="../../../assets/images/logo.png" alt="boi - build for elegance" /> -->
            </a>
            <span class="logo_entry">boi</span>
        </div>
        <div class="bar">
            <ul class="list">
                <li v-for='item in navlist' class="item">
                    <a v-link="{name: item.component}" class="navlink" title="{{item.title}}">{{item.title}}</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

</template>

<script>

export default {
    data: function() {
        let _navlist = [{
            title: '首页',
            component: 'index'
        }, {
            title: '开始使用',
            component: 'docs'
        }, {
            title: '插件',
            component: 'plugins'
        }, {
            title: '解决方案',
            component: 'solutions'
        }, {
            title: 'API',
            component: 'api'
        }, {
            title: 'FAQ',
            component: 'faq'
        }, {
            title: '关于我们',
            component: 'about'
        }];
        return {
            navlist: _navlist
        };
    }
}

</script>
