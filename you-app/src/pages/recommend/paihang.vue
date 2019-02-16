<template>
  <div id="paihang">
    <div class="paihang padding">
      <p>排行搜索</p>
      <van-icon @click="search" class="pic1" name="search"/>
    </div>
    <scrollx>
      <li class="scroll-pic" v-for="item in list" :key="item.id">
        <img :src="item.littlePicUrl">
        <span>{{item.desc}}</span>
        <p>${{item.price}}</p>
        <van-rate v-model="value"/>
      </li>
    </scrollx>
    <scrollx>
      <li class="scroll-pic" v-for="item in list" :key="item.id">
        <img :src="item.littlePicUrl">
        <span>{{item.desc}}</span>
        <p>${{item.price}}</p>
        <van-rate v-model="value"/>
      </li>
    </scrollx>
    <scrollx>
      <li class="scroll-pic" v-for="item in list" :key="item.id">
        <img :src="item.littlePicUrl">
        <span>{{item.desc}}</span>
        <p>${{item.price}}</p>
        <van-rate v-model="value"/>
      </li>
    </scrollx>
  </div>
</template>

<script>
import { getMingXing } from "../../services/recommendService";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      value: 4,
      list: []
    };
  },
  methods: {
    search() {
      this.$router.push("/search");
    }
  },
  created() {
    getMingXing().then(data => {
      this.list = data;
    });
  },
  mounted() {
    let scroll = new BScroll(".wrap", {
      scrollX: true,
      click: true
    });
  }
};
</script>

<style lang="scss" scoped>
#paihang {
  .padding {
    padding: 0 25px;
  }
  .paihang {
    position: relative;
    top: 30px;
    height: 30px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    p {
      font-size: 20px;
      font-weight: 700;
    }
    .pic1 {
      padding: 5px;
      font-size: 22px;
      height: 30px;
      width: 30px;
      color: #fff;
      background: #2feada;
      border-radius: 50%;
    }
  }

  .scroll-pic {
    box-shadow: 5px 5px 10px #ccc;
    height: 70%;
    width: 160px;
    margin: 0 20px;
    img {
      // border-radius: 5px;
      width: 100%;
      height: 100%;
    }
    span {
      margin-left: 12px;
      font-size: 14px;
      font-weight: 500;
    }
    p {
      margin-left: 12px;
      display: block;
    }
  }
}
</style>