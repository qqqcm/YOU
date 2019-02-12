const route = {
    path: '/category',
    component: () => import('../pages/category/index'),
    children: [
        {
            path: 'group/:id',
            component: () => import('../pages/category/category-group'),
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
            component: () => import('../pages/home/search')
        },
    ]
}
export default route;