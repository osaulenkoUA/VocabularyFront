import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import {iRoutes} from "../../types/iRoutes";

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на /
 */


const PrivateRoute = ({component: Component, ...routeProps}: iRoutes) => {
    const isAuthenticated: string = useSelector(authSelectors.getToken);
    return (
        <Route
            {...routeProps}
            render={(props: {}) => isAuthenticated ? <Component {...props} /> : <Redirect to="/"/>
            }
        />
    );
};

export default PrivateRoute;
