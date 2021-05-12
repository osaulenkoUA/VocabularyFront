import React, {Suspense, useEffect} from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import routes from '../routes.js';
import PrivateRoute from './Routes/PrivateRoute.js';
import PublicRoute from './Routes/PublicRoute.js';
import Section from './Section/Section.js';
import Spinner from './Spinner/Spinner.tsx';

import authOperation from '../redux/auth/authOperation.js';
import phoneBookSelectors from '../redux/PhoneBook/phoneBookSelectors.js';

function App() {
  const loading = useSelector(phoneBookSelectors.getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperation.getCurrentUser());
  }, []);

  return (
    <BrowserRouter>
      <Section>
        {loading && <Spinner/>}

        <Suspense fallback={<Spinner/>}>
          <Switch>
            {routes.map((route) =>
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
