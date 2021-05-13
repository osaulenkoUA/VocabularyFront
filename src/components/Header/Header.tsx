import React, {FC} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
import engImg from '../../images/eng1.png'
// import authSelectors from '../../redux/auth/authSelectors';
// import authOperation from "../../redux/auth/authOperation";
//
import Navigation from '../Navigation/Navigation.js';
// import UserMenu from '../UserMenu/UserMenu.tsx';

import s from "./Header.module.scss";
// import phoneBookSelectors from "../../redux/PhoneBook/phoneBookSelectors";

const Header:FC=()=> {
  // const isAuth = useSelector(authSelectors.getToken);
  // const name = useSelector(authSelectors.getName);
  // const dispatch = useDispatch();
  // const length = useSelector(phoneBookSelectors.getContacts).length;
  //
  // const logOut = () => dispatch(authOperation.logOut());
const isAuth:any='dsds';

  return (
    <div className={s.header}>
      <div className={s.wrapImg}>
        <img src={engImg} alt='image header'/>
      </div>
      <div className={s.content}>
        {typeof isAuth === 'string' && (
          <>
            <Navigation/>
            {/*<UserMenu length={length} name={name} logOut={logOut}/>*/}
          </>
        )}
      </div>
    </div>
  );
}

export default Header;

