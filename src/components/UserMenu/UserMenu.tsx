import React, {FC, ReactElement} from 'react';

import IconLogout from '../assets/IconLogout/IconLogout';
import s from './UserMenu.module.scss';

type PropTypes={
  name?:string;
  length?:number;
  logOut:()=>void;
  children?:never;
}

const UserMenu:FC<PropTypes> = ({name, logOut,length}:PropTypes):ReactElement => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <p className={s.total}>{`Total words: ${length}`}</p>
        <p className={s.title}>{`Wellcome, ${name}`}</p>
        <button
          className={s.btn}
          type="button"
          onClick={logOut}
        >
          <IconLogout/>
        </button>
      </div>
    </div>
  );
}

export default UserMenu;

UserMenu.defaultProps = {
  name: '',
  logOut: () => {},
  length:0
}