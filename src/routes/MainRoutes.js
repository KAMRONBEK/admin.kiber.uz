import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import Users from 'pages/users/index';
import User from 'pages/user/index';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },

        {
            path: 'dashboard',
            element: <DashboardDefault />
        },
        {
            path: 'users',
            children: [
                {
                    path: '',
                    element: <Users />
                },

                {
                    path: ':id',
                    element: <User />
                }
            ]
        }
    ]
};

export default MainRoutes;
