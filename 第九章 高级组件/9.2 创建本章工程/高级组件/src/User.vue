<template lang="html">
    <div id="component">
        <slot name="s1"></slot>
        <hr>
        <slot name="s2"></slot>
    </div>
</template>


<script>
export default {

}
</script>

<style lang="css" scoped>
/* // 样式放在执行的页面优先级大 */
    #component{
      font-size:26px;
    }
    h1{
      color:yellow;
    }
    p{
      font-size: 12px;
    };
</style>


