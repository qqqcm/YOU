const route = {
    path: '/category',
    component: () => import('../pages/category/index'),
    children: [
        {
            path: 'home',
            component: () => import('../pages/home'),
            props: true
        }
    ]
}
export default route;