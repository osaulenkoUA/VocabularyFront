import React, {FC, ReactElement} from 'react';
import {NavLink} from 'react-router-dom';
import routes from '../../routes';
import s from './Navigation.module.scss';
import {stylesD, stylesM} from './NavigationStyle';
import screen from "../../helpers/breakpoints";

const Navigation: FC = (): ReactElement => {
    const typeDevice: string = screen();
    const isMobile: boolean = typeDevice === 'mobile';

    return (
        <nav className={s.list}>

            {routes.map(route => route.privat ? (
                <NavLink exact to={route.path} style={isMobile ? stylesM.link : stylesD.link}
                         activeStyle={isMobile ? stylesM.activeLink : stylesD.activeLink}>
                    {route.label}
                </NavLink>) : null)}

        </nav>
    );
};

export default Navigation;
