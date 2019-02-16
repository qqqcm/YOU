<template>
  <div class="scroller-wrap" ref="scroll" :style="setStyle">
    <div class="scroller-content">
      <slot/>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "scroller",
  /* data(){
        return{
            scroller:null
        }
    }, */
  props: {
    width: Number,
    height: Number,
    top: Number,
    bottom: Number,
    left: Number,
    click: Boolean
    // scrollX:{
    //     type:Boolean,
    //     default:false
    // },
    // scrollY:{
    //     type:Boolean,
    //     default:true
    // }
  },
  computed: {
    setStyle() {
      if (this.top && this.bottom && this.width && this.left) {
        return {
          width: this.width + "px",
          // height:this.height + 'px'
          position: "absolute",
          top: this.top + "px",
          bottom: this.bottom + "px",
          left: this.left + "px"
        };
      }
      if (this.top && this.bottom && this.width) {
        return {
          width: this.width + "px",
          // height:this.height + 'px'
          position: "absolute",
          top: this.top + "px",
          bottom: this.bottom + "px",
          left: 0
        };
      }
      if (this.top && this.bottom) {
        return {
          position: "absolute",
          top: this.top + "px",
          bottom: this.bottom + "px",
          width: "100%",
          left: 0
        };
      }
    }
  },
  mounted() {
    //这条好重要哎！！动不动就靠它了！！！
    const scroller = new BScroll(this.$refs.scroll, {
      click: true
    });
    this.scroll = scroll;
    scroller.on("beforeScrollStart", () => {
      scroller.refresh();
    });
  }
};
</script>

<style>
.scroller-wrap {
  overflow: hidden;
}
</style>
