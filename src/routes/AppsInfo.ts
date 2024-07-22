type AppInfo = {
    id: number;
    title: string;
    description: string;
    internalLink: string;
    gitlink: string;
};

export type AppsInfoType = {
    APPs: AppInfo[];
};

export const apps_info: AppsInfoType = {
    APPs: [
        {
            id: 1,
            title: 'Micro Todo',
            description: 'This is micro todo app',
            internalLink: '/microTodo',
            gitlink:
                'https://github.com/NAVIFOLIO/react-csr-samples/tree/main/src/micro-todo-app',
        },
        {
            id: 2,
            title: 'Tourism Sample Site',
            description: 'REST API data fetch sample',
            internalLink: '/tourism',
            gitlink:
                'https://github.com/NAVIFOLIO/react-csr-samples/tree/main/src/TourismSite',
        },
    ],
};
