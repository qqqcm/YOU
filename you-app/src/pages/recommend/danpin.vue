<template>
    <div id="danpin">
        <div class="box" v-for="(item,index) in fashionlist" :key="index">
            <p class="tit"> {{item.title}}</p>
            <p class="date">OCTOBER 31,2018</p>
            <img :src="item.picUrl"/>
            <p class="desc">{{item.desc}}</p>
        </div>
    </div>
</template>

<script>
import {getDanPin} from '../../services/recommendService.js'
export default {
    data(){
        return{
            fashionlist:[]
        }
    },
    created(){
        getDanPin().then((data)=>{
            this.fashionlist = data;
        })
    }
    
}
</script>

<style lang="scss" scoped>
#danpin{
    padding-top:30px;
    box-sizing:border-box;
    .box{
        // width:380px;
        width:90%;
        // height:300;
        background:#fff;
        padding:10px 20px;
        margin:  0 auto 30px;
        border-radius: 8px;
        box-sizing:border-box;
        box-shadow:5px 5px 10px #ccc;
        .tit{
            font-size:18px;
            font-weight:900;
            color:#000;
        }
        .date{
            font-size:14px;
            color:#999;
            line-height:45px;
        }
        img{
            width:100%;
            margin:5px 0;
        }
        .desc{
            display:-webkit-box;
            -webkit-line-clamp:2;
            -webkit-box-orient:vertical;
            overflow:hidden;
            line-height:20px;
            color:#333;
            font-size:14px;
        }
    }

}
</style>

