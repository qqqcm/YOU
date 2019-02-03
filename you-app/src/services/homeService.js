import {FetchGet,FetchPost} from '../common/fetch';
import api from '../api'

//请求首页
export function gethome(){
    return new Promise((resolve,reject)=>{
        FetchGet(api.HOME_BAMMER_URL)
        .then((data)=>{
            resolve(data);
        })
    })
}