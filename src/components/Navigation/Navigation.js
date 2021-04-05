import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors.js';

import s from './Navigation.module.css';
import styles from './NavigationStyle.js';
// import routes from '../../routes.js';

const Navigation = () => {
	const isAuth = useSelector(authSelectors.getToken);
	return (
		<nav className={s.list}>
			{isAuth && (
				<NavLink exact to="/books" style={styles.link} activeStyle={styles.activeLink}>
					Books
				</NavLink>
			)}

			{!isAuth && (
				<>{/* <NavLink exact to="/" style={styles.link} activeStyle={styles.activeLink}>
						Login
					</NavLink> */}</>
			)}
		</nav>
	);
};

export default Navigation;
