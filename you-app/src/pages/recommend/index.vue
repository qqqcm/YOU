<template>
    <div id="recommoned">
       <!-- nav栏 -->
        <div class="scroll_wrap">
            <ul class="nav_ul">
                <li class="nav_li " v-for='(item,index) in nav_list' :key="index" @click="selectPage(index)" :class="{active:page == index}">
                    <span>{{item.name}}</span>
                </li>
            </ul>
        </div>

        <scroller :top="44" :bottom="49"  >
            {{page}}
            <p>dfsdfs fsf </p>
            <p>dfsdfs fsf </p>
            <p>dfsdfs fsf </p>
            <p>dfsdfs fsf </p>
            <p>dfsdfs fsf </p>
            <p>dfsdfs fsf </p>
            <p>dfsdfs fsf </p>
            <p>dfsdfs fsf </p>
            <p>dfsdfs fsf </p>
            <p>dfsdfs fsf </p>
            <p>dfsdfs fsf </p>
            <p>dfsdfs fsf </p>
            <p>dfsdfs fsf </p>
            <p>dfsdfs fsf </p>
            <p>dfsdfs fsf </p>
            <p>dfsdfs fsf </p>
            <p>dfsdfs fsf </p>
            <p>dfsdfs fsf </p>
            <p>dfsdfs fsf </p>
            <p>dfsdfs fsf </p>
            <p>dfsdfs fsf </p>
            <p>dfsdfs fsf </p>
            <p>dfsdfs fsf </p>
        </scroller>

    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    data(){
        return{
            page:0,
            nav_list:[
                {name:'时尚单品'},
                {name:'明星同款'},
                {name:'自媒体'},
                {name:'排行'},
            ]
        }
    },
    methods:{
        selectPage(index){
            this.page = index;
        }
    },
    mounted(){
        var scroll = new BScroll('.scroll_wrap',{
            scrollX:true,
            scrollY:false,
            click:true,
        })
    }
}
</script>

<style lang="scss" scoped>
p{
    font-size:40px;
}
 .scroll_wrap{
    background:#ccc;
    width:100%;
    overflow: hidden;
    .nav_ul{
        display: flex;
        height: 44px;
        width:486px;
        .nav_li{
            line-height: 40px;
            padding:0 25px;
            // width:142px;
            // margin:0 20px;
            text-align:center;
            span{
                display:inline-block;
                // padding:5px 0;
                font-size: 20px;
                color:#999;
            }
            &.active{
                span{
                    font-size:23px;
                    color:#000;
                    border-bottom:2px solid #000;
                }
            }
        }
        
    }
 }
</style>