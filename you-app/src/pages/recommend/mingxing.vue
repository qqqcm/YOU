<template>
    <div id="mingxing">
        <div class="box" v-for="item in starlist" :key="item.id">
            <div class="top">
                <img :src='item.picUrl' class="pic">
                <div class="right">
                    <img :src="item.littlePicUrl" class="litpic">
                    <p style="font-weight:900;font-size:14px">{{item.shopname}}</p>
                    <p style="font-size:13px;line-height:28px;">{{item.desc}}</p>
                    <p style="font-weight:900;">${{item.price}}</p>
                </div>
            </div>
            <div class="bot">
                <p style="color:#000; font-weight:900;">{{item.owner}}</p>
                <span style="margin:2px 0;">{{item.tag}}</span>
                <p>{{item.ranking}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import {getMingXing} from '../../services/recommendService.js'
export default {
    data(){
        return{
            starlist:[],
        }
    },
    created(){
        getMingXing().then((data)=>{
            this.starlist = data;
        })
    }
}
</script>

<style lang="scss" scoped>
#mingxing{
    padding-top:30px;
    box-sizing:border-box;
    .box{
        width:90%;
        // height:300;
        background:#fff;
        padding:10px 20px;
        margin:  0 auto 30px;
        border-radius: 8px;
        box-sizing:border-box;
        box-shadow:5px 5px 10px #ccc;
        // overflow:hidden;
        display:flex;
        flex-direction: column;
        .top{
            .pic{
                width:50%;
                float:left;
            }
            .right{
                width:50%;
                float:right;
                margin-top:30px;
                text-align:center;
                overflow: hidden;
                color:#000;
                .litpic{
                    width:90%;
                }
            }
        }
        .bot{
            text-align:center;
            padding-top:20px;
            box-sizing:border-box;
            span{
                display:inline-block;
                background:#ccc;
                color:#fff;
            }
        }
    }
}
        
</style>