export default {
    routes: [
        {
            path: '',
            name: 'raid-guide-index',
            component: () => import('./Index.vue'),
        },
        {
            path: 'w1/vale-guardian',
            name: 'vale-guardian',
            component: () => import('./w1/ValeGuardian.vue'),
        },
        {
            path: 'w1/gorseval',
            name: 'gorseval',
            component: () => import('./w1/Gorseval.vue'),
        },
    ]
}