<template>
  <div class="box padding">
    <div class="top">
      <p>最新排行</p>
      <span>查看更多
        <van-icon name="arrow"/>
      </span>
    </div>
    <div class="wrap">
      <ul class="scroll">
        <slot/>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "scrollx"
  // mounted() {
  //   let scroll = new BScroll(".wrap", {
  //     scrollX: true,
  //     click: true
  //   });
  // }
};
</script>

<style lang="scss" scoped>
.box {
  height: 256px;
  .top {
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    p {
      font-size: 16px;
      font-weight: 700;
    }
    span {
      font-size: 16px;
      color: #dbdbdb;
    }
  }
  .wrap {
    width: 100%;
    overflow: hidden;
    .scroll {
      display: flex;
      height: 256px;
      width: 3999px;
      margin-top: 20px;
    }
  }
}
</style>