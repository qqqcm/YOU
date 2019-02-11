import { FetchGet, FetchPost } from '../common/fetch';
import api from '../api'

//请求首页
export function gethome() {
    return new Promise((resolve, reject) => {
        FetchGet(api.HOME_BAMMER_URL)
            .then((data) => {
                resolve(data);
            })
    })
}

//请求分类

export function getCategoryList() {
    return new Promise((resolve, reject) => {
        FetchGet(api.CATELIST_URL)
            .then(data => {
                resolve({
                    list: data.list,
                    categoryList: data.categoryList.map((item) => {
                        return {
                            id: item.id,
                            categoryName: item.categoryName,
                            dicr: item.dicr,
                            price: item.price,
                            picUrl: item.picUrl,
                            score: item.score
                        }
                    })
                })
            })
    })
}