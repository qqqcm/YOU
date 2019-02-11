<template>
    <div id='collocation'>
       <van-nav-bar class="header" title="时尚搭配" left-arrow @click-left="onClickLeft"/>
        <div class="header">
            <img src="/images/page1.jpg" alt="">

        <van-collapse v-model="activeNames">
  <van-collapse-item title="FASHION COLLOCATION" name="1">
     "After careful consideration the Duke of Edinburgh has taken the decision to voluntarily surrender his driving license," the palace said in a statement.
 
Philip was behind the wheel of a Land Rover near the royal family's Sandringham estate in eastern England when he smashed into another car on Jan. 17. Philip had to be helped out of his overturned vehicle but wasn't injured. Two women in the other car were injured, though not seriously, and a 9-month-old baby boy was unhurt.
  </van-collapse-item>

</van-collapse>
        </div>
<div class="top">
        <i>时尚新品</i>
        <b>查看更多</b>
    </div>
<div class="list">
         <div class="goods" v-for="item in piclist" :key="item.id">
        <img :src="item.picUrl" alt="">
        <i>Michael Kors</i>
        <p>${{item.price}} </p>
         
    </div>
 
   
</div>
    </div>
</template>

<script>
import Vue from "vue"
import { NavBar } from 'vant';
import { gethome } from "../../services/homeService.js";
import { Collapse, CollapseItem } from 'vant';
Vue.use(Collapse).use(CollapseItem);
Vue.use(NavBar);
export default {
  data() {
    return {
    activeNames: ['1'],
    piclist: [],
    };
  },
 created() {
    gethome().then(data => {
      (this.piclist = data.picList)
    });
    
  },
  methods: {
    onClickLeft() {
    this.$router.back();

    },

  }
}
</script>

<style lang="scss" scoped>
.header{

    img{
        width:100%;
    }
}   
 .top{
     padding: 0 10px;
        display: flex;
        justify-content: space-between;
        i{
          font-size: 16px;
            font-style: normal;
            color: black;
            font-weight: 900
        }
        b{
           color:#fbce4e;
           font-size: 16px; 
        }
    }
.list{ overflow: hidden;
.goods{
    height: 230px;
    margin-top: 20px;
    width: 50%;
    float: left;
    padding: 0 10px;
    i{  
        margin-left:30px;
        font-size: 14px;
        color:#5b5b5b;
        font-style: normal;
    }
    p{
        margin-left:30px;
        font-size: 14px;
        color:black;
        font-weight: 900;
    }
    
}

}


</style>
