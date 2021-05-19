import React, {FC, ReactElement, Suspense, useEffect} from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {iRoutes}from '../types/iRoutes';
import routes from '../routes';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
import Section from './Section/Section';

import authOperation from '../redux/auth/authOperation';
import phoneBookSelectors from '../redux/PhoneBook/phoneBookSelectors';
import {useAppDispatch} from "../redux/store";
import SpinnerVocabulary from "./SpinnerCircle/SpinnerVocabulary";

const App:FC=():ReactElement=> {

  const dispatch = useAppDispatch();
  const loading:boolean = useSelector(phoneBookSelectors.getLoading);

  useEffect(() => {
    dispatch(authOperation.getCurrentUser());
  }, []);

  return (
    <BrowserRouter>
      <Section>
        {loading && <SpinnerVocabulary/>}

        <Suspense fallback={<SpinnerVocabulary/>}>
          <Switch>
            {routes.map((route:iRoutes) =>
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
