import React from 'react';
import { useDispatch } from 'react-redux';
import phoneBookActions from '../../redux/PhoneBook/phoneBookActions.js';

import s from './CheckBox.module.css';

const Checkbox = () => {
  const dispatch = useDispatch();

  function handleChange(e) {
    const checeked = e.target.checked;
    if (!checeked) dispatch(phoneBookActions.changeTheme('light'));
    if (checeked) dispatch(phoneBookActions.changeTheme('dark'));
  }

  return (
    <div className={s.container}>
      <p>Ligth</p>
      <input
        onChange={handleChange}
        type="checkbox"
        id="payt2"
        className={s.payt2}
      />
      <label className={s.label} for="payt2">
        ON
      </label>
      <p>Dark</p>
    </div>
  );
};

export default Checkbox;
