<template>
    <div id="mine">
        <div class="header">
            <van-icon name="search" size='30px'/>
            <span>个人中心</span>
            <van-icon name="bag-o" size='30px'/>
        </div>
        <div class="user">
            <div class="user_ava">
                <img src="/images/avatar.jpeg" style="width:100%">
            </div>
            <span class="user_name">用户名</span>
        </div>
        <ul class="content">
            <li v-for="item in contentList" :key="item.name">
                <van-icon :name="item.iconname" style="float:left" size="30px"/>
                <div class="text" style="float:left">
                    <span>{{item.name}}</span>
                </div>
                 <van-icon name="arrow" style="float:right" size="25px"/>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            contentList:[
                {name:'订单',iconname:'description'},
                {name:'收藏',iconname:'like-o'},
                {name:'订阅',iconname:'newspaper-o'},
                {name:'设置',iconname:'setting-o'},
                {name:'客服',iconname:'service-o'},
                {name:'会员中心',iconname:'gem-o'},
                {name:'余额充值',iconname:'cash-on-deliver'},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
#mine{
    background:rgb(245, 245, 245);
    .header{
        background:#fff;
        height:44px;
        width:100%;
        border-bottom:1px solid #ccc;
        display:flex;
        justify-content: space-between;
        font-size:20px;
        color:#000;
        font-weight:900;
        padding:5px 10px;
        box-sizing: border-box;
    }
    .user{
        background:#fff;
        height:80px;
        box-sizing: border-box;
        padding:15px;
        .user_ava{
            width:50px;
            height:50px;
            border-radius:50%;
            overflow: hidden;
            float:left;
            margin-right:20px;
        }
        .user_name{
            line-height:50px;
            font-size:16px;
            color:black;
        }

    }
    .content{
        margin-top:10px;
        li{
            background:#fff;
            height:50px;
            width:100%;
            color:#000;
            font-size:16px;
            box-sizing:border-box;
            padding:10px;
            .text{
                margin-left:10px;
                line-height:30px;
            }
            &:nth-of-type(4){
                margin-top:10px;
            }
        }
    }
}
</style>