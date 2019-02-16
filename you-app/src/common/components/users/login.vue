<template>
<div id="login">
  
    <p>登陆遇到问题?</p>
    <h1>YOU</h1>
    

        <van-icon class="pic1" name="phone-circle-o" /><input type="text" name="" id="" placeholder="输入注册时的验证码">
        <br>
        <van-icon class="pic2" name="passed" /><input type="text" name="" id="" placeholder="请输入验证码"><i  class="hq">获取验证码</i>
         <br>
        <van-icon  class="pic3" name="passed" /><input type="password" name="" id="" placeholder="请输入您的密码">

<h3 @click="back">注册新用户</h3>
    
</div>
</template>

<script>
import Vue from 'vue';

import { Icon } from 'vant';

Vue.use(Icon);
export default {
    methods:{
back(){
    this.$router.back();
}
    }

}
</script>

<style lang="scss" scoped>

#login{
    height: 100%;
    p{
     
        font-size: 14px;
        float: right;
        margin:20px 20px 0 0; 

    }
    h1{
        display: block;
        float: left;
         font-size: 50px;
         margin-top:30%; 
         margin-left:35%; 
         margin-bottom:10%; 
         text-align: center;
    }
.pic1{
    position: absolute;
    font-size: 26px;
    top: 38%;
     left: 40px;
}
.pic2{
  position: absolute;
   font-size: 26px;
   top: 47%;
  left: 40px;
}
.pic3{
    position: absolute;
   font-size: 26px;
   top: 56%;
  left: 40px;
}
.hq{
    position: absolute;
    right: 30px;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid;
    width: 90px;
    height: 30px;
    top: 45%;
    font-size: 16px;
}
      
    input{
        padding-left:30px ;
        height: 30px;
        border: none;
        border-bottom: 2px solid ;
        margin-top:30px; 
        width: 80%;
        margin-left: 10%;
      
    }
   
 h3{
    position: absolute;
    right: 80px;
    border-radius: 12px;
    display: inline-block;
    text-align: center;
    border: 2px solid;
    width:200px;
    height: 46px;
    top: 70%;
    font-size: 30px;
 }
  
  
}
</style>
