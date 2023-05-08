<template>
    <div class="main">
        <div class="title">发电统计</div>
    </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'LM',
})
</script>
 
<style scoped>
.main {
    width: 100%;
    /* background: white; */
    /* margin: 1vh 0; */
    height: 33%;
    position: relative;
    border-bottom: #0adbfa solid 1px;
}
.title {
    height: 25px;
    line-height: 25px;
    /* background: blue; */
    /* padding: 10px; */
    text-align: left;
    /* margin-left: 10px; */
    color: #0adbfa;
    position: absolute;
    top: 10px;
    left: 10px;
    width: 50%;
    font-size: 18px;
}
</style>