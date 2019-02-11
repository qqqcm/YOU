<template>
    <div id="dingdan">
        <div class="header">
            <van-icon name="arrow-left" class="arrow" size="30px"/>
            <span>我的订单</span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#dingdan{
    .header{
        color:#000;
        height:44px;
        border-bottom:1px solid #ccc;
        .arrow{
            position:absolute;
            top:5px;
            left:10px;
        }
        span{
            display:block;
            text-align:center;
            font-size:20px;
            line-height:44px;
        }
    }
}
</style>

