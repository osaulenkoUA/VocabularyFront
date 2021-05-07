import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authOperation from '../../redux/auth/authOperation';
import authSelectors from '../../redux/auth/authSelectors';
import IconLogout from '../assets/IconLogout/IconLogout';
import s from './UserMenu.module.scss';
function UserMenu() {
  const name = useSelector(authSelectors.getName);
  const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <p className={s.title}>{`Wellcome, ${name}`}</p>
        <button
          className={s.btn}
          type="button"
          onClick={() => dispatch(authOperation.logOut())}
        >
          <IconLogout />
        </button>
      </div>
    </div>
  );
}

export default UserMenu;
