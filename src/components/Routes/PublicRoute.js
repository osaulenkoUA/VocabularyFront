import React, {FC, lazy, ReactElement} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import authSelectors from '../../redux/auth/authSelectors';

/**
 * - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на /tasks
 * - В противном случае рендерит компонент
 */


const PublicRoute = ({ component: Component, ...routeProps }) => {
  const isAuthenticated = useSelector(authSelectors.getToken);
console.log(routeProps);
  return (
    <Route
      {...routeProps}
      render={props =>
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
