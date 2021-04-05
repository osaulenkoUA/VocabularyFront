import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import phoneBookOperation from '../../redux/PhoneBook/phoneBookOperation';
import phoneBookSelectors from '../../redux/PhoneBook/phoneBookSelectors.js';

import ContactList from '../../components/ContactList/ContactList.js';
import ContactForm from '../../components/ContactForm/ContactForm.js';
import FilterContacts from '../../components/FilterContacts/FilterContacts.js';

import s from './App.module.css';

function PhoneBookView() {
  const contacts = useSelector(phoneBookSelectors.getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(phoneBookOperation.fetchContact());
  }, []);

  const isContacts = contacts.length;
  const isShowFindCOntact = isContacts >= 2;
  const isShowContactList = isContacts !== 0;

  return (
    <>
      <ContactForm />
      <CSSTransition
        in={isShowFindCOntact}
        timeout={250}
        unmountOnExit
        classNames={s}
      >
        <FilterContacts />
      </CSSTransition>

      {isShowContactList && <ContactList />}
    </>
  );
}

export default PhoneBookView;
