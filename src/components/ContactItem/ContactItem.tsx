import React, {FC} from 'react';

import IconClose from '../assets/Svg/IconClose.js';

import s from './ContactListItem.module.scss';
interface data {
    word?: string;
    translate?: string;
    _id:string;
}
type PropTypes= {
    elem: data;
    removeWords: (_id: string) => void;
    children?: never;
}

const ContactItem:FC<PropTypes> = ({elem, removeWords}:PropTypes) => {
  const {word, translate, _id:id} = elem;
  return (
    <div key={word} className={s.list__item}>
      <span>{word}:</span>
      <span>{translate}</span>
      <button
        className={s.btn_delete}
        type="button"
        onClick={() => removeWords(id)}
      >
        <IconClose/>
      </button>
    </div>
  );
};


export default ContactItem;

ContactItem.defaultProps = {
  elem: {_id:''},
  removeWords: () => {}
};