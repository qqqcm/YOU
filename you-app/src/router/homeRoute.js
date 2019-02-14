const route = {
    path:'/home',
    component:()=>import('../pages/home/index'),
    redirect:'/home/main',
    children:[
        
        {
            path:'main',
            props:true,
            component:()=>import('../pages/home/main')
        },
        {
            path:'fashion1',
            props:true,
            component:()=>import('../pages/home/fashion1')
        },
        {
            path:'fashion2',
            props:true,
            component:()=>import('../pages/home/fashion2')
        },
        {
            path:'fashion3',
            props:true,
            component:()=>import('../pages/home/fashion3')
        }
    ]
}
export default route;