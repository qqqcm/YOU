const route = {
    path: '/category',
    component: () => import('../pages/category/index'),
    children: [
        {
            path: 'goodsDetail/:id',
            component: () => import('../pages/common/goodsDetail'),
            props: true
        },
        {
            path: 'home',
            component: () => import('../pages/home'),
            props: true
        },
        {
            path: 'search',
            props: true,
            component: () => import('../common/components/search/search')
        },
    ]
}
export default route;