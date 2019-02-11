<template>
    <div id="search">
      <div class="search">
            <van-icon @click="search" class="pic1" name="search"/>
            <input type="text" name="" id="" placeholder="搜索">
            <p class="pass" @click="pass">取消</p>
      </div>
      

      <div class="find">
     <h3>发现</h3>
     <ul>
         <li>

         </li>
     </ul>
      </div>
    </div>
</template>

<script>
import Vue from "vue";
import { gethome } from "../../services/homeService.js";
import {  Icon } from "vant";
Vue.use(Icon);
export default {
    methods:{
        pass(){
              this.$router.back
        }
    }
}
</script>

<style lang="scss" scoped>
.search{
    width: 90%;
    margin: 0 auto;
    .pic1{
        font-size: 20px;
        position: absolute;
        left: 6%;
        line-height:26px; 
    }
    input{
        
        padding-left: 24px;
        width: 85%;
        background-color: #e6e6e6;
        border: none;
        border-radius: 4px;
        height:26px;
        box-sizing: border-box; 
   }
   .pass{
       display: inline-block;
        font-size: 18px;
        line-height: 16px;
        margin-left:10px; 
        color: black;
        font-weight: 900;
   }

}

</style>
