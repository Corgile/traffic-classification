<template>
    <div class="Index">
        <Head></Head>
        <div class="main">
            <Left></Left>
            <Mid></Mid>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue'
import Head from '../components/header/head.vue'
import Left from '../components/left/left.vue'
import Mid from '../components/mid/mid.vue'
export default defineComponent({
    components: { Head, Left, Mid },
    name: 'Index',
})
</script>
 
<style scoped>
.Index {
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: auto;
}
.main{
    display: flex;
    flex: 1;
    top: 8vh;
    bottom: 0vh;
    left: 0;
    right: 0;
    position:absolute;
}
</style>