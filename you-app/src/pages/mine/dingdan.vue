<template>
    <div id="dingdan">
        <header>
            <van-icon name="arrow-left" class="arrow" size="30px" @click="goBack"/>
            <p>我的订单</p>
        </header>
        <nav>
            <li v-for="(item,index) in navList" :key="index">
                {{item.name}}
            </li>
        </nav>
        <div class="none">
            <p>暂时没有订单</p>
            <!-- <router-link :to="/recommend"><span>去逛逛</span></router-link> -->
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            navList:[
                {name:'全部',},
                {name:'待付款',},
                {name:'待发货',},
                {name:'待收货',},
                {name:'退款',},
            ]
        }
    },
    methods:{
        goBack(){
            this.$router.back();
        },
    }
}
</script>

<style lang="scss" scoped>
#dingdan{
    header{
        color:#000;
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
    nav{
        height:40px;
        width:100%;
        li{
            width:20%;
            float:left;
            line-height:40px;
            text-align:center;
            font-size:14px;
            color:#000;
            border-bottom:1px solid #ccc;
        }
    }
    .none{
        color:#000;
        p{
            font-size:18px;
            position: absolute;
            top:200px;
            left:160px;
        }
        span{
            display:block;
            width:140px;
            height:40px;
            font-size:20px;
            line-height:40px;
            text-align:center;
            border:1px solid #000;
            position: absolute;
            top:300px;
            left:145px;
        }
    }
}
</style>

