<style lang='scss'>

</style>

<template>
<div class="article" v-html='content'>

</div>

</template>

<script>
    export default {
        props: {
            content: {
                type: String,
                required: true
            }
        },
        created: function(){

        }
    }
</script>
