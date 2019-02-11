<template>
  <div id="category" class="page">
    <header class="header border-bottom">
      <p>
        <van-icon name="wap-home"/>分类
        <van-icon name="search"/>
      </p>
    </header>
    <div class="wrap">
      <scroller :top="74" :bottom="49" :width="80">
        <li
          v-for="(item,index) in list"
          :key="item.id"
          :class="{active: selectIndex===index}"
          @click="selectedTab(index)"
        >
          <p>{{item}}</p>
        </li>
      </scroller>
      <scroller
        ref="content"
        :top="74"
        :bottom="49"
        :width="295"
        :left="80"
        v-if="categoryList.length>0"
      >
        <ul class="content-list">
          <li class="content-item" v-for="value in categoryList" :key="value.id">
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
</template>

<script>
import { getCategoryList } from "../../services/homeService";
export default {
  data() {
    return {
      selectIndex: 0,
      list: [],
      categoryList: []
    };
  },
  methods: {
    selectedTab(index) {
      this.selectIndex = index;
    }
  },
  created() {
    getCategoryList().then(data => {
      this.list = data.list;
      this.categoryList = data.categoryList;
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
    p {
      line-height: 28px;
      font-size: 14px;
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
            }
            span:nth-child(4) {
              display: inline;
              margin-left: 100px;
            }
          }
        }
      }
    }
  }
}
</style>


