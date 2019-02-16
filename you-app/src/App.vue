<template>
  <div id="app">
    <div id="nav" v-if="!this.$route.params.id">
      <router-link to="/" class="tab"><Icon type="ios-home-outline" /></router-link>
      <router-link to="/category" class="tab"><Icon type="ios-list-box-outline" /></router-link>
      <router-link to='/recommend' class="tab"><Icon type="ios-compass-outline" /></router-link>
      <router-link to="/mine" class="tab"><Icon type="ios-person-outline" /></router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  
}
</script>

<style lang="scss">
#nav{
  width:100%;
  height:49px;
  background:#fff;
  border-top:1px solid #cccccc;
  display:flex;
  position:absolute;
  bottom:0;
  left:0;
  .tab{
    width:25%;
    line-height:49px;
    text-align:center;
    font-size:40px;
    color:#252525;
  }
}
</style>
