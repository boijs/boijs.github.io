<style lang='scss' scope>
@import "../../../styles/_mixins.scss";
.indexes{
    padding: 0 2rem;
    .list{
        @include ulWithoutStyle();
        font-size: 1.5rem;
        .item{
            margin-top: 0.5rem;
        }
        .subtitle_list{
            font-size: 1.2rem;
            text-indent: 1rem;
            @include ulWithoutStyle();
        }
        .subtitle_item{
            @include strictHeight(2rem);
        }
    }
}
</style>

<template>
<div class="indexes">
    <ul data-active='{{active}}' class="list">
        <li v-for='item in index' data-anchor='{{item.anchor}}' class="item">
            <a v-link='{name: "docs",params: {anchor:item.anchor}}'>{{item.title}}</a>
            <template v-if='!!item.subtitles'>
                <ul class="subtitle_list" v-for='subitem in item.subtitles'>
                    <li class="subtitle_item">
                        <a v-link='{name:"docs",params:{anchor:item.anchor,subanchor:subitem.anchor}}'>{{subitem.name}}</a>
                    </li>
                </ul>
            </template>
        </li>
    </ul>
</div>

</template>

<script>
    export default {
        props: {
            index: {
                type: Array,
                required: true
            },
            active: {
                type: String,
                required: true
            }
        },
        created: function(){
        }
    }
</script>
