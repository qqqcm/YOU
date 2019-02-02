const express = require('express');
const {mock, Random} = require('mockjs');
const api = require('./api');
const app = express();


const url = require('url');

const http = require('http');



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
var banner=[
    "https://gdp.alicdn.com/imgextra/i1/3676232520/O1CN01Gg9ujC1UUCa4PJxNd_!!3676232520.jpg",
    "https://gdp.alicdn.com/imgextra/i3/3676232520/O1CN01uN1r2h1UUCa2LsPgV_!!3676232520.jpg",
    "https://gdp.alicdn.com/imgextra/i2/3676232520/O1CN01ZAHLZ41UUCZt4XPFC_!!3676232520.jpg",
    "https://gdp.alicdn.com/imgextra/i1/3676232520/O1CN016mj5j91UUCa2LldPh_!!3676232520.jpg"
];
var List= ['T-恤','风衣','毛衣','皮草','西装','牛仔','衬衫','女裙']

var discover=['时尚单品','明星同款','自媒体','排行榜']
app.get(api.HOME_BAMMER_URL, (req, res)=>{
    let result = mock({
        message: 'ok',
        status: 0,
        
        data: {
           "bannerList|6":[{
            'id|+1': 12,
            'bannerUrl|1':banner,
           }],

            'picList|10': [
                {
                    'id|+1': 34,
                    name: '推荐',  
                     'picUrl|1':picList, 
                }],
        }
    })
    res.json(result);
})

app.get(api.FASHION_NEW_URL,(req,res)=>{
    let result = mock({
        message:'ok',
        status:0,
        data:{
            'categoryList|20':[{
                'id|+1':56,
                categoryName:"Mical kors",
                'price|45-499':100,
                'picUrl|1':picList, 
            }]
        }
    })
    res.json(result)
})

app.get(api.CATELIST_URL,(req,res)=>{
    let result = mock({
        message:'ok',
        status:0,
        data:{ 
            list:List,
            'categoryList|20':[{
                'id|+1':78,
                categoryName:"商品名称14号",
                dicr:'备注文字10号|备注文字10号|备注文字10号|备注文字10号',
                'price|45-499':100,
                'picUrl|1':picList,
                "score|1": "★"
            }]
        }
    })
    res.json(result)
})

app.get(api.STARLIST_URL,(req,res)=>{
    let result = mock({
        message:'ok',
        status:0,
        data:{
           'starlist|20':[{
                picUrl:Random.image('280x500'),
                littlePicUrl:Random.image('112x60'),
                "price|1-100": 100,
                Shopame:'loewe',
                dicr:"Gate 纹理皮革迷你单肩",
                owner:'唐嫣',
                same:'同款',
                ranking:'Nov.01'
           }]

        }
    })
    res.json(result)
})


app.get(api.FASHION_URL,(req,res)=>{
    let result = mock({
        message:'ok',
        status:0,
        data:{
           'fashionlist|20':[{
                picUrl:Random.image('622x333'),
                title:"2018秋冬外套造型专辑",
                date:'OCTOBER 31，2018',
                desc:Random.cparagraph()
           }]

        }
    })
    res.json(result)
})

app.get(api.MEDIA_URL,(req,res)=>{
    let result = mock({
        message:'ok',
        status:0,
        data:{
           'medialist|20':[{
                portrait:Random.image('80x80'),
                "follow|100-999": 100,
                title:'白色+驼色=时尚感',
                picUrl:Random.image('560x516'),
           }]
        }
    })
    res.json(result)
})

app.get(api.RANKING_URL,(req,res)=>{
    let result = mock({
        message:'ok',
        status:0,
        data:{
           'Popularity |20':[{

                "price|1-100": 100,
                name:Random.word(10, 15),
                picUrl:Random.image('240x380'),
           }],
           'newlist|20':[{
            "price|1-100": 100,
            name:Random.word(10, 15),
            picUrl:Random.image('240x380'),
           }],
           'otherlist|20':[{
            "price|1-100": 100,
            name:Random.word(10, 15),
            picUrl:Random.image('240x380'),
           }]
        }
    })
    res.json(result)
})


app.listen('9000', 'localhost', (error)=>{
    if(error){
        console.log('启动失败');
    }
    else{
        console.log('启动成功');
    }
})