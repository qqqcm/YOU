<template>
  <div id="Detail">
    <div class="banner">
      <van-nav-bar class="header" left-arrow @click-left="onClickLeft"/>
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item class="banner" v-for="item in list " :key="item.id">
          <img :src="item.bannerUrl" alt>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    list: [];
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    }
  },
  created() {
    getCategoryList().then(data => {
      this.list = data.categoryList.bannerList;
    });
  }
};
</script>

<style lang="scss" scoped>
#Detail {
  .header {
    img {
      width: 100%;
    }
  }
  .banner {
    width: 100%;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
}
</style>

