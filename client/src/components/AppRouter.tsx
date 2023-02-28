import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { admin_routes, auth_routes, public_routes } from '../routes';
import { IRootReducer } from '../types/Interfaces';

interface AppRouterProps {
    
}

const AppRouter: React.FC<AppRouterProps> = () => {

    const userState = useSelector<IRootReducer, IRootReducer["userState"]>(state => state.userState)

    return (
        <Routes>
            {userState.user.role === "ADMIN" && admin_routes.map(({path, Component}) =>
                 <Route key={path} path={path} element={Component}/>  
            )}
            {userState.isAuth && auth_routes.map(({path, Component})=>
                <Route key={path} path={path} element={Component}/>    
            )}
            {public_routes.map(({path, Component}, index) => 
                <Route key={`${path}+${index}`} path={path} element={Component}/>    
            )}
        </Routes>
    );
};

export default AppRouter;