<template>
    <div id="mine">
        <div class="header">
            <span>个人中心</span>
        </div>
        <div class="user">
            <div class="img"></div>
            <span>用户名</span>
        </div>
        <ul class="content">
            <li v-for="item in contentList" :key="item.name">
                <div class="icon"></div>
                <div class="text">
                    <span>{{item.name}}</span>
                    <div class="arrow-right"></div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            contentList:[
                {name:'订单',icon:''},
                {name:'收藏',icon:''},
                {name:'订阅',icon:''},
                {name:'设置',icon:''},
                {name:'客服',icon:''},
                {name:'会员中心',icon:''},
                {name:'余额充值',icon:''},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>