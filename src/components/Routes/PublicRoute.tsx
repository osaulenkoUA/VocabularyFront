import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import authSelectors from '../../redux/auth/authSelectors';
import {iRoutes} from "../../types/iRoutes";

/**
 * - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на /tasks
 * - В противном случае рендерит компонент
 */


const PublicRoute = ({ component: Component, ...routeProps }:iRoutes) => {
  const isAuthenticated:string = useSelector(authSelectors.getToken);
  return (
    <Route
      {...routeProps}
      render={(props:{}) =>
        isAuthenticated && routeProps.restricted ? (
          <Redirect to="/list" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
