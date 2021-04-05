import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import routes from '../routes.js';
import PrivateRoute from './Routes/PrivateRoute.js';
import PublicRoute from './Routes/PublicRoute.js';
import Section from './Section/Section.js';
import Checkbox from './CheckBox/CheckBox';
import Spinner from './Spinner/Spinner.js';

import authOperation from '../redux/auth/authOperation.js';
import phoneBookSelectors from '../redux/PhoneBook/phoneBookSelectors.js';
import Navigation from './Navigation/Navigation.js';

function App() {
	const loading = useSelector(phoneBookSelectors.getLoading);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(authOperation.getCurrentUser());
	}, []);

	return (
		<BrowserRouter>
			<Section>
				{/* <Checkbox /> */}
				{loading && <Spinner />}

				<Suspense fallback={<h1>Loading...</h1>}>
					<Switch>
						{routes.map((route) =>
							route.privat ? (
								<PrivateRoute key={route.label} {...route} />
							) : (
								<PublicRoute key={route.label} {...route} />
							)
						)}
					</Switch>
				</Suspense>
			</Section>
			<Navigation />
		</BrowserRouter>
	);
}

export default App;
