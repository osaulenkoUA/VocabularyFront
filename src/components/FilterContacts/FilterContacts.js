import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import phoneBookSelectors from '../../redux/PhoneBook/phoneBookSelectors.js';
import phoneBookAction from '../../redux/PhoneBook/phoneBookActions.js';

import s from './FilterContacts.module.scss';

function FilterContacts() {
  const dispatch = useDispatch();
  const value = useSelector(phoneBookSelectors.getFilter);

  return (
    <div className={s.findContact}>
      <p className={s.filterTitle}>Find word:</p>
      <input
        type="text"
        value={value}
        onChange={({ target }) =>
          dispatch(phoneBookAction.changeFilter(target.value))
        }
        className={s.filterInput}
        placeholder="Search..."
      />
    </div>
  );
}

export default FilterContacts;
