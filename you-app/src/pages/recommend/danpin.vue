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
.box{
    // width:380px;
    width:90%;
    height:370px;
    background:#fff;
    padding:20px;
    margin:  30px 15px 0;
    box-sizing:border-box;
    img{
        width:90%;
    }
}
</style>

