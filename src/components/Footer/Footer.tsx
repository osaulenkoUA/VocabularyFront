import React, {FC} from 'react';

import s from "./Footer.module.scss";

const Footer:FC = () => {
    return (
    <div className={s.footer}>
      <div className={s.title}>
        <p>Vocabulary Building</p>
      </div>
    </div>
  );
}

export default Footer;

