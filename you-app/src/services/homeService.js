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

export function getCategoryList(id) {
    return new Promise((resolve, reject) => {
        FetchGet(api.CATELIST_URL,{id})
            .then(data => {
                resolve({
                    categoryList: data.categoryList.map((item) => {
                        return {
                            id: item.id,
                            name: item.name,
                            subCateList: item.subCateList.map((subItem) => {
                                return {
                                    categoryName: subItem.categoryName,
                                    dicr: subItem.dicr,
                                    price: subItem.price,
                                    picUrl: subItem.picUrl,
                                    score: subItem.score,
                                    id: subItem.id,
                                    bannerList: subItem.bannerList,
                                    color:subItem.color,
                                    size:subItem.size
                                }
                            })

                        }
                    })
                })
            })
    })
}
