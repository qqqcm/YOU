const route = {
    path:'/recommend',
    component:()=>import('../pages/recommend/index'),
    redirect:'/recommend/tab/0',
    children:[
        {
            path:'tab/0',
            props:true,
            component:()=>import('../pages/recommend/danpin')
        },
        {
            path:'tab/1',
            props:true,
            component:()=>import('../pages/recommend/mingxing')
        },
        {
            path:'tab/2',
            props:true,
            component:()=>import('../pages/recommend/meiti')
        },
        {
            path:'tab/3',
            props:true,
            component:()=>import('../pages/recommend/paihang')
        }
    ]
}
export default route;