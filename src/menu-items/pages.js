// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
    id: 'authentication',
    title: 'Аутентификация',
    type: 'group',
    children: [
        {
            id: 'login1',
            title: 'Логин',
            type: 'item',
            url: '/login',
            icon: icons.LoginOutlined,
            target: true
        }
    ]
};

export default pages;