import React from 'react';

import IconClose from '../assets/Svg/IconClose.js';

import s from './ContactListItem.module.scss';

const ContactItem = ({elem, removeWords}) => {
  const {word, translate, _id} = elem;
  return (
    <div key={word} className={s.list__item}>
      <span>{word}:</span>
      <span>{translate}</span>
      <button
        className={s.btn_delete}
        type="button"
        onClick={() => removeWords(_id)}
      >
        <IconClose/>
      </button>
    </div>
  );
};


export default ContactItem;

ContactItem.defaultProps = {
  elem: {},
  removeWords: () => {}
};