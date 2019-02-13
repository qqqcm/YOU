<template>
  <div id="search">
    <div class="bar">
      <form>
          <van-icon  class="icon" name="search" />
        <input type="text" placeholder="请输入您要搜索的内容...">
        <i @click="pass">取消</i>
      </form>
    </div>
    <div class="history">
        <p>历史搜索 <van-icon  class="close" name="close" /></p>
        <ul>
            <li>风衣</li>
            <li>大衣</li>
            <li>男装</li>
            <li>女装</li>
            <li>皮衣</li>
            <li>裤子</li>
        </ul>
    </div>

    <div class="footer">
        <p>发现</p>
        <ul>
            <li>
                <img src="https://gdp.alicdn.com/imgextra/i4/3676232520/O1CN01fSbqvz1UUCaAKMf2s_!!3676232520.jpg" alt="">
                <p>SADI-DSA</p>
            </li>
             <li>
                <img src="https://gdp.alicdn.com/imgextra/i3/3676232520/O1CN01a97wa71UUCa9qJscl_!!3676232520.jpg" alt="">
                <p>SADI-DSA</p>
            </li>
             <li>
                <img src="https://gdp.alicdn.com/imgextra/i1/3676232520/O1CN01KJTX2O1UUCa1lQCxW_!!3676232520.jpg" alt="">
                <p>SADI-DSA</p>
            </li>
        </ul>
    </div>
  </div>

</template>

<script>
import Vue from "vue";

import { Icon, Search } from "vant";
Vue.use(Icon).use(Search);
export default {
    methods:{
        pass(){
            this.$router.back();
        }
    }
};
</script>

<style lang="scss" scoped>
.bar {
    margin-top: 20px;
    width: 100%;
  .icon{
      position: absolute;
      left:16px;
      top: 28px;
      font-size: 14px;
  }
  input {
    background: #e7e7e7;
    border:none;
    border-radius: 5px;
    width: 80%;
    height: 30px;
   margin-left:20px;
   padding-left:30px;  
  }
  i{
      display: inline-block;
      color: black;
      font-size: 14px;
      margin-left: 12px;
  }
}
.history{
   
    width: 90%;
    margin: 0 auto;
     margin-top:30px; 
    p{ 
        display: block;
        height: 30px;
        font-size: 18px;
        color: black;
       
    .close{
        float: right;
        line-height: 30px;
    }

    }
    ul{
        margin-top:12px; 
        li{
            float: left;
            width: 40px;
            height: 20px;
            margin-left:12px; 
            color: black;
            font-size: 14px;
            background-color: #e6e6e6;
            border-radius: 10px;
            text-align: center;
        }
    }

}
    .footer{
        position: absolute;
        bottom: 45px;
        width: 90%;
        left: 10%;
        p{
            font-size: 18px;
        }
    
          li{
              
            float: left;
            width: 30%;
            padding: 5px;
            p{
                  font-size: 12px;
            }
            img{
                width: 100%;
            }
         
        }
        
    }

</style>
