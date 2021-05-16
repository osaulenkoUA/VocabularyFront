import React, {FC, ReactElement} from 'react';
import {useSelector} from 'react-redux';
import {useAppDispatch} from "../../redux/store";


import authSelectors from '../../redux/auth/authSelectors';
import authOperation from "../../redux/auth/authOperation";
import phoneBookSelectors from "../../redux/PhoneBook/phoneBookSelectors";

import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';

import s from "./Header.module.scss";
import engImg from '../../images/eng1.png';

const Header: FC = ():ReactElement => {
    const dispatch = useAppDispatch();

    const isAuth = useSelector(authSelectors.getToken);
    const name: string = useSelector(authSelectors.getName);
    const length: number = useSelector(phoneBookSelectors.getContacts).length;

    const logOut = () => dispatch(authOperation.logOut());

    return (
        <div className={s.header}>
            <div className={s.wrapImg}>
                <img src={engImg} alt='image header'/>
            </div>
            <div className={s.content}>
                { !!isAuth.length && (
                    <>
                        <Navigation/>
                        <UserMenu length={length} name={name} logOut={logOut}/>
                    </>
                )}
            </div>
        </div>
    );
}

export default Header;

