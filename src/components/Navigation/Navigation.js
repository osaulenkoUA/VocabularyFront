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
      <NavLink exact to="/books" style={styles.link} activeStyle={styles.activeLink}>
        Add Word
      </NavLink>

      <NavLink exact to="/learn" style={styles.link} activeStyle={styles.activeLink}>
        Learn
      </NavLink>
    </nav>
  );
};

export default Navigation;
