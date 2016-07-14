<style lang='scss' scope>

</style>

<template>
<div class="indexes">
    <ul data-active='{{active}}' class="list">
        <li v-for='item in index' data-anchor='{{item.anchor}}' class="item">
            <a v-link='{name: "docs",params: {anchor:item.anchor}}'>{{item.title}}</a>
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
