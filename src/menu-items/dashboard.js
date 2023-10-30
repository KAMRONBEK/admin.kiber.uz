// assets
import { DashboardOutlined } from '@ant-design/icons';
import { UserOutlined, MoneyCollectOutlined } from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined,
    UserOutlined,
    MoneyCollectOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'group-dashboard',
    title: 'Навигация',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Панель приборов',
            type: 'item',
            url: '/dashboard',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        },
        {
            id: 'users',
            title: 'Общая статистика',
            type: 'item',
            url: '/users',
            icon: icons.UserOutlined,
            breadcrumbs: false
        },
        {
            id: 'tariff',
            title: 'Тариф',
            type: 'item',
            url: '/tarif',
            icon: icons.MoneyCollectOutlined,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
