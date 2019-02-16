const express = require('express');
const { mock, Random } = require('mockjs');
const api = require('./api');
const app = express();


const url = require('url');

const http = require('http');

var shipin = [
    "https://img.alicdn.com/bao/uploaded/i2/3676232520/O1CN01oHM2Ur1UUCa8wz2GK_!!0-item_pic.jpg_180x180.jpg",
    "https://img.alicdn.com/bao/uploaded/i4/3676232520/O1CN01P1z0Na1UUCa3ISysl_!!0-item_pic.jpg_180x180.jpg",
    "https://img.alicdn.com/bao/uploaded/i1/3676232520/O1CN01rlc6Vb1UUCZho8p5C_!!0-item_pic.jpg_180x180.jpg",
    "https://img.alicdn.com/bao/uploaded/i1/3676232520/O1CN01jB99Vo1UUCZaskvH9_!!0-item_pic.jpg_180x180.jpg",
    "https://img.alicdn.com/bao/uploaded/i4/3676232520/O1CN01sGXF2V1UUCZzc56Ku_!!0-item_pic.jpg_180x180.jpg",
    "https://img.alicdn.com/bao/uploaded/i3/3676232520/O1CN017QH3W01UUCZsrNmoV_!!0-item_pic.jpg_180x180.jpg",
    "https://img.alicdn.com/bao/uploaded/i2/3676232520/O1CN01m9p8VL1UUCa8MmWjr_!!3676232520.jpg_180x180.jpg"
];

var fenlei = [

    "https://gdp.alicdn.com/imgextra/i2/3676232520/O1CN01sC2Skc1UUCZdBllJ2_!!3676232520.jpg",
    "https://gdp.alicdn.com/imgextra/i4/3676232520/O1CN01dlMviq1UUCZgImR6l_!!3676232520.jpg",
    "https://gdp.alicdn.com/imgextra/i4/3676232520/O1CN01SYPdBl1UUCZdBjPqq_!!3676232520.jpg",
    "https://gdp.alicdn.com/imgextra/i3/3676232520/O1CN01NoceSv1UUCZgC60gy_!!3676232520.jpg",
    "https://gdp.alicdn.com/imgextra/i3/3676232520/O1CN01NoceSv1UUCZgC60gy_!!3676232520.jpg",
];


var picList = [
    "https://img.alicdn.com/bao/uploaded/i3/3676232520/O1CN01lXUZl11UUCZQwt5fn_!!0-item_pic.jpg_180x180.jpg",
    "https://img.alicdn.com/bao/uploaded/i2/3676232520/O1CN01nkJ2TW1UUCa67qPFy_!!0-item_pic.jpg_180x180.jpg",
    "https://img.alicdn.com/bao/uploaded/i3/3676232520/O1CN01dHecVt1UUCZwBvQD1_!!0-item_pic.jpg_180x180.jpg",
    "https://img.alicdn.com/bao/uploaded/i2/3676232520/O1CN01W05Jgz1UUCa4vJvfK_!!0-item_pic.jpg_180x180.jpg",
    "https://img.alicdn.com/bao/uploaded/i2/3676232520/O1CN01p3VmW81UUCa1sYs35_!!0-item_pic.jpg_180x180.jpg",
    "https://img.alicdn.com/bao/uploaded/i3/3676232520/O1CN01SB2SmR1UUCZ01ODEs_!!0-item_pic.jpg_180x180.jpg",
    "https://img.alicdn.com/bao/uploaded/i4/3676232520/O1CN01umWK471UUCZR2UHpV_!!0-item_pic.jpg_180x180.jpg",
    "https://img.alicdn.com/bao/uploaded/i4/3676232520/O1CN01XnLLHG1UUCa52V657_!!0-item_pic.jpg_180x180.jpg",
    "https://img.alicdn.com/bao/uploaded/i2/3676232520/O1CN01p3VmW81UUCa1sYs35_!!0-item_pic.jpg_180x180.jpg",
];
var banner = [
    "https://gdp.alicdn.com/imgextra/i1/3676232520/O1CN01KJTX2O1UUCa1lQCxW_!!3676232520.jpg",
    "https://gdp.alicdn.com/imgextra/i3/3676232520/O1CN01a97wa71UUCa9qJscl_!!3676232520.jpg",
    "https://gdp.alicdn.com/imgextra/i4/3676232520/O1CN01fSbqvz1UUCaAKMf2s_!!3676232520.jpg",
    "https://gdp.alicdn.com/imgextra/i2/3676232520/O1CN01BR7Tsh1UUCa9Ou65v_!!3676232520.jpg",
    "https://gdp.alicdn.com/imgextra/i2/3676232520/O1CN019yjvOC1UUCa69pk7w_!!3676232520.jpg",
    "https://gdp.alicdn.com/imgextra/i3/3676232520/O1CN01tv7LlH1UUCa8dTeeh_!!3676232520.jpg",
    "https://gdp.alicdn.com/imgextra/i2/3676232520/O1CN01hys00y1UUCaAoi6y5_!!3676232520.jpg"
];

var homebanner = [
    "https://gdp.alicdn.com/imgextra/i2/3676232520/O1CN01OwmoMC1UUCa8aPwo6_!!3676232520.jpg",
    "https://gdp.alicdn.com/imgextra/i3/3676232520/O1CN01jAq4im1UUCa8esOGC_!!3676232520.jpg",
    "https://gdp.alicdn.com/imgextra/i3/3676232520/O1CN015eJg8w1UUCa9WbHfn_!!3676232520.jpg",
    "https://gdp.alicdn.com/imgextra/i3/3676232520/O1CN01mu5rkK1UUCa7U17JS_!!3676232520.jpg",
    "https://gdp.alicdn.com/imgextra/i3/3676232520/O1CN018ydGhq1UUCa9Wa4po_!!3676232520.jpg",
    "https://gdp.alicdn.com/imgextra/i3/3676232520/O1CN012sgJk61UUCa8jadis_!!3676232520.jpg"
];
var List = ['T-恤', '风衣', '毛衣', '皮草', '西装', '牛仔', '衬衫', '女裙']

var discover = ['时尚单品', '明星同款', '自媒体', '排行榜']
app.get(api.HOME_BAMMER_URL, (req, res) => {
    let result = mock({
        message: 'ok',
        status: 0,
        data: {
            "bannerList|6": [{
                "id|+1": 2234202,
                'bannerUrl|1': banner,
            }],

            'picList|10': [
                {
                    "id|+1": 4213523,
                    name: '推荐',
                    'picUrl|1': picList,
                    'price|45-499': 100,
                }],
            'shopList|10': [
                {
                    "id|+1": 34534,
                    name: "时尚搭配",
                    'shopUrl|1': picList,
                }],
            history: List
        }
    })
    res.json(result);
})

app.get(api.FASHION_NEW_URL, (req, res) => {
    let result = mock({
        message: 'ok',
        status: 0,
        data: {
            'categoryList|20': [{
                "id|+1": 97866,
                categoryName: "Mical kors",
                'price|45-499': 100,
                'picUrl': Random.image('750x965'),
            }]
        }
    })
    res.json(result)
})


//请求分类数据，及商品详情数据
app.get(api.CATELIST_URL, (req, res) => {
    let result = mock({
        message: 'ok',
        status: 0,
        data: {
            'categoryList|8': [{
                "id|+1": 0987657,
                'name|+1': [
                    'T-恤', '风衣', '毛衣', '皮草', '西装', '牛仔', '衬衫', '女裙'
                ],

                "subCateList|20": [{
                    "id|+1": 1,
                    categoryName: "商品名称14号",
                    dicr: '备注文字10号|备注文字10号|备注文字10号|备注文字10号',
                    'price|45-499': 100,
                    'picUrl|1': picList,
                    "score|1-5": "★",
                    "bannerList|4": [{
                        'bannerUrl|1': banner,
                    }],
                }]
            }]
        }
    })
    let {id} = url.parse(req.url,true).query;
    if(id){
        res.json(mock({
            message: 'ok',
            status: 0,
            data: {    
                categoryList:[{

                    subCateList: [{
                        id: id,
                        categoryName: Random.csentence(5,20),
                        dicr: Random.cparagraph(2,20),
                        'color|1-6':{
                        red:'红色',
                        green:'绿色',
                        blue:'蓝色',
                        yellow:'黄色',
                        pink:'粉色',
                        perple:'紫色'
                        },
                        'size|1-5':{
                            X:'X',
                            XM:'XM',
                            M:'M',
                            XL:'XL',
                            XXL:'XXL',
                        },
                        'price|45-499': 100,
                        'picUrl|1': picList,
                        "bannerList|4": [{
                            'bannerUrl|1': banner,
                        }],
                      }]
                }]
            }
        }))
        return;
    }
    res.json(result)
})

app.get(api.STARLIST_URL, (req, res) => {
    let result = mock({
        message: 'ok',
        status: 0,
        data: {
            'starlist|20': [{
                "id|+1": 6546789,
                "picUrl|1": banner,
                "littlePicUrl|1": shipin,
                "price|+21": 100,
                Shopame: 'loewe',
                dicr: "Gate 纹理皮革迷你单肩",
                owner: '唐嫣',
                same: '同款',
                ranking: 'Nov.01',
                detail: 'Organic black',
                'tagname|1': [
                    '人气排行', '最新排行'
                ],
                morename: '查看更多 ',
                "pic|10": shipin
            }]

        }
    })
    res.json(result)
})


app.get(api.FASHION_URL, (req, res) => {
    let result = mock({
        message: 'ok',
        status: 0,
        data: {
            'fashionlist|20': [{
                "id|+1": 7654678,
                "picUrl|1": fenlei,
                title: "2018秋冬外套造型专辑",
                date: 'OCTOBER 31，2018',
                desc: Random.cparagraph()
            }]

        }
    })
    res.json(result)
})


app.get(api.MEDIA_URL, (req, res) => {
    let result = mock({
        message: 'ok',
        status: 0,
        data: {
            'medialist|20': [{
                "id|+1": 3489754,
                "portrait|1": shipin,
                "follow|100-999": 100,
                title: '白色+驼色=时尚感',
                "picUrl|1": homebanner,
            }]
        }
    })
    res.json(result)
})

app.get(api.RANKING_URL, (req, res) => {
    let result = mock({
        message: 'ok',
        status: 0,
        data: {
            'Popularity |20': [{
                "id|+1": 89765797,
                "price|1-100": 100,
                name: Random.word(10, 15),
                picUrl: Random.image('240x380'),
            }],
            'newlist|20': [{
                "id|+1": 27884679,
                "price|1-100": 100,
                name: Random.word(10, 15),
                picUrl: Random.image('240x380'),
            }],
            'otherlist|20': [{
                "id|+1": 6732494,
                "price|1-100": 100,
                name: Random.word(10, 15),
                picUrl: Random.image('240x380'),
            }]
        }
    })
    res.json(result)
})


app.listen('9000', 'localhost', (error) => {
    if (error) {
        console.log('启动失败');
    }
    else {
        console.log('启动成功');
    }
})