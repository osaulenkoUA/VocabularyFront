import React, {FC, ReactElement} from 'react';
import {useSelector} from 'react-redux';
import {useAppDispatch} from "../../redux/store";


import authSelectors from '../../redux/auth/authSelectors';
import authOperation from "../../redux/auth/authOperation";
import vocabularySelectors from "../../redux/Vocabulary/vocabularySelectors";

import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';

import s from "./Header.module.scss";
import LogoDesktop from '../../images/LogoDesktop.png';

import vocabularyActions from "../../redux/Vocabulary/vocabularyActions";

const Header: FC = ():ReactElement => {
    const dispatch = useAppDispatch();

    const isAuth = useSelector(authSelectors.getToken);
    const name: string = useSelector(authSelectors.getName);
    const length: number = useSelector(vocabularySelectors.getWords).length;

    const logOut = () => {
        dispatch(authOperation.logOut());
        dispatch(vocabularyActions.resetWordList());
    }

    return (
        <div className={s.header}>
            <div className={s.wrapImg}>
                <img src={LogoDesktop} alt='image header'/>
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

