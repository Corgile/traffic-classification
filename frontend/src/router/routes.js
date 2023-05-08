const routes = [
    {
        path: '/',
        redirect: "/index"
    },
    {
        name: 'index',
        path: '/index',
        component: () => import('@/views/index.vue')
    },
    {
        name: 'log',
        path: '/log',
        component: () => import('@/views/log.vue')
    },
];

export default routes