import React from 'react';

import { useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import phoneBookSelectors from '../../redux/PhoneBook/phoneBookSelectors.js';
import ContactItem from '../ContactItem/ContactItem.js';

import s from './ContactList.module.css';

const ContactList = () => {
  const list = useSelector(phoneBookSelectors.getConatctList);

  return (
    <TransitionGroup component="ul" className={s.list}>
      {list.map(elem => {
        return (
          <CSSTransition
            key={elem._id}
            timeout={250}
            classNames={s}
            unmountOnExit
          >
            <ContactItem id={elem._id} />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

export default ContactList;
