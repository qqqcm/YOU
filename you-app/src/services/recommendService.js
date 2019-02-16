import { FetchGet, FetchPost } from '../common/fetch';
import api from '../api'

//请求时尚单品数据
export function getDanPin() {
    return new Promise((resolve, reject) => {
        FetchGet(api.FASHION_URL)
            .then((data) => {
                resolve(data.fashionlist.map((item) => {
                    return {
                        title: item.title,
                        picUrl: item.picUrl,
                        desc: item.desc
                    }
                }));
            })
    })
}

//请求明星同款数据
export function getMingXing() {
    return new Promise((resolve, reject) => {
        FetchGet(api.STARLIST_URL)
            .then((data) => {
                resolve(data.starlist.map((item) => {
                    return {
                        picUrl: item.picUrl,
                        littlePicUrl: item.littlePicUrl,
                        shopname: item.Shopame,
                        desc: item.dicr,
                        price: item.price,
                        owner: item.owner,
                        tag: item.same,
                        ranking: item.ranking,
                        detail: item.detail,
                        name: item.tagname,
                        more: item.morename,
                        pic: item.pic
                    }
                }))
            })
    })
}

//请求自媒体数据
export function getMeiTi() {
    return new Promise((resolve, reject) => {
        FetchGet(api.MEDIA_URL)
            .then(data => {
                resolve(data.medialist.map(item => {
                    return {
                        id: item.id,
                        portrait: item.portrait,
                        follow: item.follow,
                        title: item.title,
                        picUrl: item.picUrl,
                    }
                }))
            })
    })
}