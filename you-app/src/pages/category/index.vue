<template>
<div id="category">
  <router-view/>

  <div class="page" v-show="!this.$route.params.id">
    <header class="header border-bottom">
      <van-icon class="wap-home" name="wap-home" @click="home"/>
      <p>分类</p>
      <van-icon class="search" name="search" @click="search"/>
    </header>
    <div class="wrap">
      <scroller :top="74" :bottom="49" :width="80">
        <li
          v-for="(item,index) in list"
          :key="item.id"
          :class="{active: selectIndex===index}"
          @click="selectedTab(index)"
        >
          <p>{{item.name}}</p>
        </li>
      </scroller>
      <scroller ref="scroller" :top="74" :bottom="49" :width="295" :left="80" v-if="list.length>0">


        <ul class="content-list">
          <li @click="details(value.id)" class="content-item" v-for="value in list[selectIndex].subCateList" :key="value.id">
            <div class="content-img">
              <img :src="value.picUrl">
            </div>
            <div class="content">
              <p>{{value.categoryName}}</p>
              <span>{{value.dicr}}</span>
              <span>￥{{value.price}}</span>
              <span>{{value.score}}</span>
            </div>
          </li>
        </ul>


      </scroller>
    </div>
  
  </div>
</div>
</template>

<script>
import { getCategoryList } from "../../services/homeService";
export default {
  data() {
    return {
      selectIndex: 0,
      list: [],
      detailData:[],
    };
  },
  methods: {
    details(id){
      this.$router.push({path:'/category/goodsdetail/'+id});
      getCategoryList(id).then(data => {
        this.detailData = data.categoryList[0].subCateList[0];
        // console.log(this.detailData)
      });
    },
    selectedTab(index) {
      this.selectIndex = index;
    },
    home() {
      this.$router.push("/home");
    },
    search() {
      this.$router.push("/search");
    }
  },

  created() {
    getCategoryList().then(data => {
      this.list = data.categoryList;
    });
  }
};
</script>

<style lang="scss" scoped>
#category {
  background: #fff;
  .header {
    width: 100%;
    height: 50px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    padding: 12px 8px;
    box-sizing: border-box;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    .wap-home {
      font-size: 20px;
    }
    p {
      line-height: 28px;
      font-size: 20px;
    }
    .search {
      font-size: 20px;
    }
  }
  .wrap {
    display: flex;
    .scroller-wrap:nth-of-type(1) {
      li {
        line-height: 50px;
        font-size: 14px;
        color: #333;
        border-bottom: 1px solid #eee;
        text-align: center;
        border-left: 2px solid transparent;
        &.active {
          background: #eee;
          border-left: 3px solid #000;
        }
      }
    }
    .scroller-wrap:nth-of-type(2) {
      .content-list {
        margin-left: 3px;
        .content-item {
          width: 100%;
          display: flex;
          .content-img {
            width: 30%;
            img {
              width: 100%;
            }
          }

          .content {
            width: 75%;
            margin-left: 5px;
            p {
              font-size: 16px;
              color: #000;
              height: 22px;
            }
            span:nth-of-type(1) {
              font-size: 12px;
              color: #ccc;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            span:nth-child(3) {
              display: inline;
              font-size: 16px;
              line-height: 45px;
            }
            span:nth-child(4) {
              display: inline;
              font-size: 16px;
              color: rgb(250,198,50);
              margin-left: 110px;
            }
          }
        }
      }
    }
  }
}
</style>


