<template>
    <div id="mine">
        <router-view/>
        <!-- 控制隐藏 -->
        <div class="indexpage" v-if="this.$store.state.showmine">
            <div class="header">
                <van-icon name="search" size='30px' @click="search"/>
                <span>个人中心</span>
                <van-icon name="bag-o" size='30px' @click="shopbag"/>
            </div>
            <div class="user">
                <div class="user_ava">
                    <img src="/images/avatar.jpeg" style="width:100%">
                </div>
                <span class="user_name">厘米°</span>
            </div>
            <ul class="content">
                <li v-for="(item,index) in contentList" :key="item.name" @click="selectPage(index)">
                    <van-icon :name="item.iconname" style="float:left" size="30px"/>
                    <div class="text" style="float:left">
                        <span>{{item.name}}</span>
                    </div>
                    <van-icon name="arrow" style="float:right" size="25px"/>
                </li>
            </ul>
        </div>
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
    },
    methods:{
        selectPage(index){
            this.$store.commit('noShowMine');
            this.$router.push('mine/tab/'+index);
        },
        search(){
            this.$router.push('/search');
        },
        shopbag(){
            this.$router.push('/shopbag');
        }
    },
    watch:{
        //这里可以用vue导航守卫 beforeRouteUpdate，监测路由变化
        //这里只是简单地监听 $route 对象
        //从tab页面返回到index页面
        '$route'(to,from){
            immediate:true;
            if(to.path=='/mine'){
                this.$store.commit('yesShowMine');
            }
        },
    },
}
</script>

<style lang="scss" scoped>
#mine{
.indexpage{
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
}
</style>