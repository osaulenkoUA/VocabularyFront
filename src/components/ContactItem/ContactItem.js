import React from 'react';
import { connect, useDispatch } from 'react-redux';

import IconClose from '../assets/Svg/IconClose.js';
import phoneBookOperation from '../../redux/PhoneBook/phoneBookOperation';
import phoneBookSelectors from '../../redux/PhoneBook/phoneBookSelectors.js';

import s from './ContactListItem.module.css';

const ContactItem = ({ word, translate, _id, theme }) => {
  const dispatch = useDispatch();

  return (
    <li key={_id} className={s.list__item}>
      <span>{word}:</span>
      <span>{translate}:</span>

      <button
        className={s.btn_delete}
        type="button"
        onClick={() => dispatch(phoneBookOperation.removeContact(_id))}
      >
        <IconClose />
      </button>
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...phoneBookSelectors.getContactItem(state, ownProps.id),
    theme: phoneBookSelectors.getTheme(state),
  };
};

export default connect(mapStateToProps)(ContactItem);
