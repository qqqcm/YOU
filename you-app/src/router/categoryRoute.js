const route = {
    path: '/category',
    component: () => import('../pages/category/index'),
    children: [
        {
            path:'goodsdetail/:id',
            props:true,
            component: () =>import('../common/components/goodsdetail/goodsdetail')
        },
    ]
}
export default route;