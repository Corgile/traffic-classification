<template>
    <div class="MID">
        <MT></MT>
        <MB></MB>
    </div>
</template>
<script>
import { defineComponent } from 'vue'
import MT from "./mid_menu/mid_top.vue";
import MB from "./mid_menu/mid_bottom.vue";
export default defineComponent({
    name: 'MID',
    components: { MT, MB },
})
</script>
 
<style scoped>
.MID {
    /* background: yellow; */
    width: 65%;
    display: flex;
    margin: 1vh;
    flex-direction: column;
    /* align-items: center;
    justify-content: center; */
}
</style>