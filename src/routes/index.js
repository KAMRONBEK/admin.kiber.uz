import { Routes, Route, Navigate } from 'react-router-dom';

// project import

import DashboardDefault from 'pages/dashboard/index';
import MainLayout from 'layout/MainLayout/index';
import Users from 'pages/users/index';
import User from 'pages/user/index';
import MinimalLayout from 'layout/MinimalLayout/index';
import AuthLogin from 'pages/authentication/auth-forms/AuthLogin';
import Login from 'pages/authentication/Login';
import { useEffect, useState } from 'react';
import Tarif from 'pages/tarif/index';
import TarifCreate from 'pages/tarif/TarifCreate';
import TarifUpdate from 'pages/tarif/TarifUpdate';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    if (!isAuthenticated) {
        return (
            <Routes>
                <Route path="/*" element={<Navigate to="login" replace />} />
                <Route path="login" element={<Login setAuth={setIsAuthenticated} />} />
            </Routes>
        );
    }
    return (
        <Routes>
            <Route path="/" element={<MainLayout setAuth={setIsAuthenticated} />}>
                <Route path="/" element={<Navigate to="dashboard" replace />} />
                <Route path="dashboard" element={<DashboardDefault />} />
                <Route path="users" element={<Users />} />
                <Route path="tarif" element={<Tarif />} />
                <Route path="tarif/create" element={<TarifCreate />} exact />
                <Route path="tarif/:idTarif" element={<TarifUpdate />} />
                <Route path="users/:id" element={<User />} />
            </Route>
        </Routes>
    );
}
