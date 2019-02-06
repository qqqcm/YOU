<template>
    <div id="meiti">
        <div class="box" v-for="(item) in medialist" :key="item.id">
            <div class="avatar">
                <img :src="item.portrait" class="ava">
                <p>{{item.follow}}关注</p>
            </div>
            <div class="follow"> + 关注</div> 
            <p class="tit">{{item.title}}</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
            <img :src="item.picUrl" class="pic">
        </div>
    </div>
</template>

<script>
import {getMeiTi} from '../../services/recommendService.js'
export default {
    data(){
        return{
            medialist:[]
        }
    },
    mounted(){
        getMeiTi().then((data)=>{
            this.medialist = data;
        })
    }
}
</script>

<style lang="scss" scoped>
#meiti{
    padding-top:30px;
    box-sizing:border-box;
    .box{
        position:relative;
        width:90%;
        background:#fff;
        padding:10px 20px;
        margin:  0 auto 30px;
        border-radius: 8px;
        box-sizing:border-box;
        box-shadow:5px 5px 10px #ccc;
        .avatar{
            text-align:center;
            width:100%;
            .ava{
                border-radius:50%;
                width:40px;
            }
            p{
                color:#ccc;
            }
        }
        .follow{
            position:absolute;
            top:20px;
            right:20px;
            display: inline-block;
            padding:2px 6px;
            background:#000;
            color:#fff;
            border-radius:4px;
            text-align:center;
        }
        .tit{
            font-size:18px;
            font-weight:900;
            color:#000;
            text-align:center;
            line-height:50px;
        }
        .pic{
            width:100%;
            margin:5px 0;
        }
    }
}
</style>