<template>
  
      
    <scroller :top="1" :bottom="49" class="scroll_wrap">
     

   <router-view/>

    </scroller>

</template>

<script>
import Vue from "vue";
import BScroll from "better-scroll";
import { gethome } from "../../services/homeService.js";
import {  Icon } from "vant";
Vue.use(Icon);

export default {

}
  
</script>

<style lang="scss" scoped>

</style>
