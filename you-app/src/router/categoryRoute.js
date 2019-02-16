const route = {
    path: '/category',
    component: () => import('../pages/category/index'),
    children: [
        {
            path: 'goodsdetail/:id',
            component: () => import('../common/components/goodsdetail/goodsdetail'),
            props: true
        },
        {
            path: 'home',
            component: () => import('../pages/home'),
            props: true
        }
        
        
    ]
}
export default route;