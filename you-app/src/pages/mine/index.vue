<template>
    <div id="mine">
        <div class="header">
            <van-icon name="search" />
            <span>个人中心</span>
            <van-icon name="bag-o" />
        </div>
        <div class="user">
            <div class="img"></div>
            <span>用户名</span>
        </div>
        <ul class="content">
            <li v-for="item in contentList" :key="item.name">
                <van-icon :name="item.iconname" />
                <div class="text">
                    <span>{{item.name}}</span>
                </div>
                 <van-icon name="arrow" />

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

</style>