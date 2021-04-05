import React from 'react';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';

import Navigation from '../Navigation/Navigation.js';
import UserMenu from '../UserMenu/UserMenu.js';

function Header() {
	const isAuth = useSelector(authSelectors.getToken);
	return (
		<>
			{typeof isAuth === 'string' && <UserMenu />}
			{/* <Navigation /> */}
		</>
	);
}

export default Header;
