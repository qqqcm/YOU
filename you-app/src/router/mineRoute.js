const route = { 
    path:'/mine',
    component:()=>import('../pages/mine/index'),
    children:[
        {
            path:'tab/0',
            component:()=>import('../pages/mine/dingdan')
        },
        {
            path:'tab/1',
            component:()=>import('../pages/mine/shoucang')
        },
        {
            path:'tab/2',
            component:()=>import('../pages/mine/dingyue')
        },
        {
            path:'tab/3',
            component:()=>import('../pages/mine/shezhi')
        },{
            path:'tab/4',
            component:()=>import('../pages/mine/kefu')
        },{
            path:'tab/5',
            component:()=>import('../pages/mine/huiyuan')
        },{
            path:'tab/6',
            component:()=>import('../pages/mine/chongzhi')
        },
        
    ]
}
export default route;