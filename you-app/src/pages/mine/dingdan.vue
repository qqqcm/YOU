<template>
    <div id="dingdan">
        <header>
            <van-icon name="arrow-left" class="arrow" size="30px" @click="goBack"/>
            <p>我的订单</p>
        </header>
        <nav>
            <li v-for="(item,index) in navList" :key="index" ><!-- :class="{avtive:select == index}" -->
                {{item.name}}
            </li>
        </nav>

        <!-- 订单没有数据时显示这个 -->
        <!-- <div class="none">
            <p>暂时没有订单</p> -->
            <!-- 这个Path注意一下，./的话会在当前路径加， -->
            <!-- <router-link :to="{path:'/recommend'}" class="gorec">去逛逛</router-link>
        </div> -->

        <!-- 订单有数据时显示这个   :thumb="imageURL"-->
        <van-card num="2" tag="标签" price="2.00" desc="描述信息"  title="商品标题">
            <div slot="footer" class="footer">
                <div class="more">
                    <span @click="more" >更多</span>
                    <ul class="more_block" ref="more_block">
                        <li>查看物流</li>
                        <li>申请开票</li>
                        <li>发货清单</li>
                    </ul>
                </div>
                <p>延长收货</p>
                <p style="color:rgb(255,93,11);">确认收货</p>
                <p>再次购买</p>
            </div>
        </van-card>

    </div>
</template>

<script>
import { Card } from 'vant';
import Vue from 'vue';
Vue.use(Card);

export default {
    data(){
        return{
            moreBlock:'block',
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
        more(){
            if(this.moreBlock == 'block'){
                this.$refs.more_block.style.display = "none";
                this.moreBlock = 'none';
            }else{
                this.$refs.more_block.style.display = "block";
                this.moreBlock = 'block';
            }
        }
    }
}
</script>

<style lang="scss" scoped>
#dingdan{
    background:rgb(242,242,242);
    a{
        color:black;
    }
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
    nav{
        height:40px;
        width:100%;
        background:#fff;
        li{
            width:20%;
            float:left;
            line-height:40px;
            text-align:center;
            font-size:14px;
            color:#000;
            border-bottom:1px solid #ccc;
            &.active{
                border-bottom: 2px solid #000;
            }
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
        .gorec{
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
    .footer{
        margin:10px 0;
        .more{
            position:relative;
            margin:0 10px;
            display:inline-block;
            width:40px;
            height:30px;
            span{
                font-size:14px;
                text-decoration: underline;
            }
            .more_block{
                position:absolute;
                top:-98px;
                left:-15px;
                width:80px;
                display:none;
                border-radius:5px;
                background:rgb(153,153,153);
                li{
                    height:30px;
                    line-height:30px;
                    text-align:center;
                    font-size:14px;
                    color:#fff;
                    text-decoration:underline;
                    &:nth-of-type(2){
                        border-top:1px solid #666;
                        border-bottom:1px solid #666;
                    }
                }
            }
        }
        p{
            display:inline-block;
            width:80px;
            height:30px;
            line-height: 30px;
            text-align: center;
            border:1px solid #999;
            border-radius: 15px / 15px ;
            margin:0 5px;
            font-size:14px;
            &:nth-of-type(2){
                border:1px solid rgb(255,93,11);
            }
        }
    }

    
}
</style>

