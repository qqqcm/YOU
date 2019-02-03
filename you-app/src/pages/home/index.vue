<template>
  <div id="home">
           <div class="header">
        <van-icon name="search"/>
        <i>YOU</i>
        <van-icon name="send-gift-o"/>
      </div>
      
    <scroller :top="44" :bottom="49" class="scroll_content">
       <div class="banner">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item class="banner" v-for="item in bannerlist " :key="item.id">
            <img :src="item.bannerUrl" alt>
          </van-swipe-item>
        </van-swipe>
      </div>

      <div class="hot">
          <p>热门推荐</p>
          <div class="scroll_wrap">
            <ul class="scroll_pic">
                <li class="pic" v-for="item in piclist " :key='item.id'>
                   <img :src="item.picUrl" alt="">
                </li>
            </ul>

          </div>
      </div>

   
        <ul class="main">
            <li v-for="item in shoplist" :key="item.id">
            <img :src="item.shopUrl" alt="">

            <div class="one">
                <i>{{item.name}}</i>
            </div>
            </li>
        </ul>

   

    </scroller>
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
  created() {
    gethome().then(data => {
      (this.piclist = data.picList), (this.bannerlist = data.bannerList), (this.shoplist = data.shopList);
    });
  },
  mounted(){
    var scroll = new BScroll('.scroll_wrap',{
      scrollX:true,
      click:true,
    })
  }

}
  
</script>

<style lang="scss" scoped>
#home{
  overflow: hidden;
.header{
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    i{
        font-size: 25px;
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
  .scroll_wrap{
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
      li{
          width: 100%;
          height: 220px;
          img{
              margin-left:10px;
              width: 200px;
              height: 200px;
          }

          .one {  
                float: right;
                margin-top:20px;
                width: 18px;
                i{
                    font-size: 18px;
                }
            }
      }

  }
    
 }
</style>
