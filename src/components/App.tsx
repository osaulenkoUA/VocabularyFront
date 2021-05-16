import React, {FC, ReactElement, Suspense, useEffect} from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import {useSelector} from 'react-redux';

import routes from '../routes';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
import Section from './Section/Section';
import Spinner from './Spinner/Spinner';

import authOperation from '../redux/auth/authOperation';
import phoneBookSelectors from '../redux/PhoneBook/phoneBookSelectors';
import {useAppDispatch} from "../redux/store";

const App:FC=():ReactElement=> {
  const loading:boolean = useSelector(phoneBookSelectors.getLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authOperation.getCurrentUser());
  }, []);
  interface route{
    path: string;
    label: string;
    exact: boolean;
    component: any;
    privat:boolean;
    restricted: boolean;
  }
  return (
    <BrowserRouter>
      <Section>
        {loading && <Spinner/>}

        <Suspense fallback={<Spinner/>}>
          <Switch>
            {routes.map((route:route) =>
              route.privat ? (
                <PrivateRoute key={route.label} {...route} />
              ) : (
                <PublicRoute key={route.label} {...route} />
              ),
            )}
          </Switch>
        </Suspense>
      </Section>
    </BrowserRouter>
  );
}

export default App;
