<template>
    <div id="shopbag">
        <header>
            <van-icon name="arrow-left" class="arrow" size="30px" @click="goBack"/>
            <p>购物袋</p>
        </header>
        <scroller>
            <ul class="bag_content">
                <li></li>
            </ul>
        </scroller>
    </div>
</template>

<script>
export default {
    methods:{
        goBack(){
            this.$router.back();
        }
    }
}
</script>

<style lang="scss" scoped>
#shopbag{
    header{
        color:#000;
        background:#fff;
        height:44px;
        border-bottom:1px solid #ccc;
        .arrow{
            position:absolute;
            top:5px;
            left:10px;
        }
        p{
            text-align:center;
            font-size:20px;
            line-height:44px;
        }
    }
}
</style>

