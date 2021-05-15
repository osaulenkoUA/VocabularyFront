import React, {FC} from 'react';

import s from './Notification.module.css';

const Notification:FC = () => {
  return (
    <div className={s.container}>
      <p>Contact Already Exist or Number,Name are Empty!!!</p>
    </div>
  );
};

export default Notification;
