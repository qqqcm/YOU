import {FetchGet,FetchPost} from '../common/fetch';
import api from '../api'

//请求时尚单品数据
export function getDanPin(){
    return new Promise((resolve,reject)=>{
        FetchGet(api.FASHION_URL)
        .then((data)=>{
            resolve(data.fashionlist.map((item)=>{
                return{
                    title:item.title,
                    picUrl:item.picUrl,
                    desc:item.desc
                }
            }));
        })
    })
}