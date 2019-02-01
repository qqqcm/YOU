import axios from 'axios';
import {Toast} from 'vant';

export function FetchGet(url,params = {}){
    return new Promise((resolve,reject)=>{
        axios.get(url,{
            params
        })

        //这里一定是要写response!!!写res数据带不出来！！！
        .then(response=>{
            // console.log(response);
            if(response.data.status != 0){
                Toast('请求错误');
            }
            else{
                //请求成功
                resolve(response.data.data);
            }
        })
        .catch(err=>{
            console.log('请求失败');
            // Toast('数据请求失败');
        })
    })
}


export function FetchPost(url,params){
    axios.post(url,params)
    .then(response=>{
        if(response.data.status != 0){
            Toast('请求错误');
        }
        else{
            //请求成功
        }
    })
    .catch(err=>{
        Toast('数据请求失败');
    })
}