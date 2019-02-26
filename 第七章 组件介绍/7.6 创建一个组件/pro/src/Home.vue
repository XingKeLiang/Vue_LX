<template>  
    <div>
        <p>ServerStatus:{{status}}</p>
        <hr>
        <button @click="chengeStatus">chenge</button>
    </div>
</template>
<script>
    export default{
        data:function(){
            return {
                status:"circle"
            }
        },
        methods:{
            chengeStatus(){
                this.status="Normal"
            }
        }

    }
</script>
<style></style>