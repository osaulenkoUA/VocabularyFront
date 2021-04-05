import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authOperation from '../../redux/auth/authOperation';
import authSelectors from '../../redux/auth/authSelectors';

import s from './UserMenu.module.css';
function UserMenu() {
  const name = useSelector(authSelectors.getName);
  const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
      <span className={s.title}>Wellcome,{name}</span>
      <button className={s.btn} type="button" onClick={() => dispatch(authOperation.logOut())}>
        Logout
      </button>
    </div>
  );
}

export default UserMenu;
