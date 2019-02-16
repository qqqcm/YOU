<template>
  <div class="goodsdetail">
    <!-- 定位的返回键开始 -->
    <van-icon name="arrow-left" class="arrow" size="30px" @click="goBack"/>
    <!-- 定位的返回键结束 -->
    <scroller :top="1" :bottom="60">
      <van-swipe class="swipe"  :height=450 indicator-color="white">
        <van-swipe-item v-for="(item,index) in detailData.bannerList" :key="index">
          <img :src='item.bannerUrl' style="width:100%"/>
        </van-swipe-item>
      </van-swipe>
      <div class="title">
        <p>{{detailData.categoryName}}</p>
        <p>￥{{detailData.price}}</p>
      </div>
      <div class="select">
        <div @click="showColor">
          {{color}}
          <van-icon name="arrow-down" size="30px"/>
          <ul class="sel_color" ref="color_wrap">
            <li v-for="item in detailData.color" :key="item" @click.stop="slesctColor(item)">{{item}}</li>
          </ul>
        </div>
        <div @click="showSize">
          {{size}}
          <van-icon name="arrow-down" size="30px"/>
          <ul class="sel_size" ref="size_wrap">
            <li v-for="item in detailData.size" :key="item" @click.stop="slesctSize(item)">{{item}}</li>
          </ul>
        </div>
      </div>
      <div class="dirc">
        <p>商品介绍</p>
        <p>{{detailData.dicr}}</p>
      </div>
    </scroller>
    <!-- 定位的购买键开始 -->
    <div class="buy">
      <p @click="gotoBag">加入购物袋</p>
      <p @click="gotoBuy(detailData.id)">立即购买</p>
    </div>
    <!-- 定位的购买键结束 -->
  </div>
</template>

<script>
export default {
  data(){
    return{
      detailData:{},
      color:'颜色',
      size:'号码',
    }
  },
  methods:{
    goBack(){
      this.$router.back();
    },
    showColor(){
      this.$refs.color_wrap.style.display = 'block';
    },
    showSize(){
      this.$refs.size_wrap.style.display = 'block';
    },
    slesctColor(item){
      this.color = item;
      this.$refs.color_wrap.style.display = 'none';
    },
    slesctSize(item){
      this.size = item;
      this.$refs.size_wrap.style.display = 'none';
    },
    gotoBag(){
      this.$router.push('/shopbag');
      this.$store.commit('addGoodsData',this.$store.state.goodsData);
    },
    gotoBuy(id){
      this.$router.push('/mine/tab/0');
      this.$store.commit('noShowMine');
    },
  } ,
  mounted(){
    this.detailData = this.$parent.detailData;
    this.$store.state.goodsData = this.detailData;
  },
  // watch:{
  //   '$route'(to,from){
  //     if(to.path=='/category/goodsdetail'){
  //       this.detailData = this.$store.state.goodsData;
  //     }
  //   }
  // }
  
};
</script>

<style lang="scss" scoped>
.goodsdetail {
  background:#fff;
  .arrow{
    position:fixed;
    top:10px;
    left:10px;
    z-index: 2;
  }
  .title{
    margin:20px 0;
    text-align: center;
    line-height:40px;
    p:first-of-type{
      color:#000;
      font-size:24px;
    }
    p:last-of-type{
      color:red;
      font-size:22px;
    }
  }
  .select{
    display:flex;
    height:50px;
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
    box-sizing: border-box;
    div{
      width:50%;
      text-align:center;
      font-size:20px;
      line-height:50px;
      position:relative;
      .van-icon{
        margin:0 10px ;
        top:10px;
      }
      .sel_color , .sel_size{
        color:#000;
        z-index:1;
        position:absolute;
        top:47px;
        left:0;
        width:100%;
        border-top:1px solid #fff;
        background:#fff;
        li{
          border:1px solid #ccc;
          border-top:0;
        }
      }
      .sel_color{
        display:none;
      }
      .sel_size{
        display:none;
      }
    }
  }
  .dirc{
    padding:30px 10px;
    p:nth-of-type(1){
      font-size:20px;
      text-align:center;
      line-height:50px;
    }
    p:nth-of-type(2){
      font-size:16px; 
      line-height:30px;
    }
  }
  .buy{
    position:fixed;
    bottom:0px;
    left:0px;
    height:60px;
    width:100%;
    p{
      float:left;
      width:50%;
      height:60px;
      line-height: 60px;
      text-align:center;
      font-size:20px;
      &:nth-of-type(1){
        background:#fff;
        border:1px solid #000;
        color:#000;
      }
      &:nth-of-type(2){
        background:#000;
        border:1px solid #000;
        border-left:0;
        color:#fff; 
      }
    }
  }
}
</style>

