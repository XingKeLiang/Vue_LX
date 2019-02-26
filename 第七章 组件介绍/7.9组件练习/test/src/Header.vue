<template lang="html">
    <div class="row">
        <div class="col-xs-12">
            <footer>
                <p>All Servers Status:{{status}}</p>
            </footer>
        </div>
    </div>
</template>
<script>
export default {
  data:function(){
    return {
      status:"circle"
    }
  }
}
</script>
<style lang="css" scoped>

</style>
