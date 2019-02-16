<template>
  <div id="home">
         

   <div class="header">
        <van-icon @click="search" class="pic1" name="search"/>
        <i>YOU</i>
        <van-icon class="pic2" name="send-gift-o"/>
      </div>
      
   
       <div class="banner">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item class="banner" v-for="item in bannerlist " :key="item.id">
            <img :src="item.bannerUrl" alt>
          </van-swipe-item>
        </van-swipe>
      </div>

   <div class="hot">
          <p>热门推荐</p>
          <div class="scroll_wrap2">
            <ul class="scroll_pic">
                <li class="pic" v-for="item in piclist " :key='item.id'>
                   <img :src="item.picUrl" alt="">
                </li>
            </ul>

          </div>
      </div>

   
        <ul class="main">
           <li @click="fashion1" class="fashion">
             <div class="one"><i>潮流搭配</i></div>
             <img src="https://gdp.alicdn.com/imgextra/i4/3676232520/O1CN01zxR1nZ1UUCZgC4T5q_!!3676232520.jpg" alt="">
           </li>
            <li @click="fashion2" class="fashions">
             <div class="two"><i>时尚搭配</i></div>
             <img src="https://gdp.alicdn.com/imgextra/i4/3676232520/O1CN01SYPdBl1UUCZdBjPqq_!!3676232520.jpg" alt="">
           </li>
           <li @click="fashion3" class="all">
             <div class="two"><i>整体搭配</i></div>
             <img src="https://gdp.alicdn.com/imgextra/i2/3676232520/O1CN01sC2Skc1UUCZdBllJ2_!!3676232520.jpg" alt="">
           </li>

        </ul>



  </div>
</template>

<script>
import Vue from "vue";
import BScroll from "better-scroll";
import { gethome } from "../../services/homeService.js";
import { Swipe, SwipeItem, Icon } from "vant";
Vue.use(Swipe)
  .use(SwipeItem)
  .use(Icon);

export default {
  data() {
    return {
      piclist: [],
      bannerlist: [],
      shoplist:[]
    };
  },



 methods:{
        search(){
          this.$router.push('/search');
        },
        fashion1(){
          this.$router.push('/home/fashion1');
        
        },
        fashion2(){
          this.$router.push('/home/fashion2');
        },
        fashion3(){
          this.$router.push('/home/fashion3');
        }
    },




  created() {
    gethome().then(data => {
 
      (this.piclist = data.picList), (this.bannerlist = data.bannerList), (this.shoplist = data.shopList);
    });
    
  },
  mounted(){
    let scroll = new BScroll('.scroll_wrap2',{
      scrollX: true,
      click: true,
    })


  }

  

}
  
</script>

<style lang="scss" scoped>

#home{
  overflow: hidden;
.header{
  margin-top:10px;
  margin-bottom:10px; 
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    i{
        font-size: 25px;
        font-style: normal;
 
    }
    .pic1{
 
      line-height: 37px;
    }
    .pic2{
      line-height: 37px;
    }
}
.banner {
      
 box-shadow:5px 5px 10px #ccc;
  width: 90%;
 
  margin: 0 auto;
  img {
    width: 100%;
  }
}
.hot{
   
    margin-top: 15px;
    height: 240px;
    p{
       font-size: 20px;
       font-weight: 900; 
       padding-left:20px; 
    }
  .scroll_wrap2{
    width:100%;
    overflow:hidden;
    .scroll_pic{  
          display: flex;
          height: 170px;
          width:9999px;
      }
      .pic{
          box-sizing: border-box;
          box-shadow:5px 5px 10px #ccc;
          margin:0 20px;
          height: 170px;
          width:160px;
          img{
              width: 100%;
              height:100%;
          }
      }

  }


}

  .main{
      padding: 0 20px;

      .fashion{
          width: 100%;
          height: 220px;
          img{
              margin-left:10px;
              width: 300px;
              height: 200px;
          }

          .one {  
                float: left;
                margin-top:80px;
                width: 18px;
                i{
                    font-size: 18px;
                     font-style: normal;
                }
            }
      }

       .fashions{
          width: 100%;
          height: 220px;
          img{
              margin-left:10px;
              width: 300px;
              height: 200px;
          }

          .two {  
                float: right;
                margin-top:50px;
                width: 18px;
                i{
                    font-size: 18px;
                     font-style: normal;
                }
            }
      }
      .all{
          width: 100%;
          height: 220px;
          img{
              margin-left:10px;
              width: 300px;
              height: 200px;
          }

          .two {  
                float: right;
                margin-top:50px;
                width: 18px;
                i{
                  font-style: normal;
                    font-size: 18px;
                }
            }
      }






  }
    
 }
</style>
