import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CSSTransition} from 'react-transition-group';

import createArray from '../../helpers/createArray'
import screen from "../../helpers/breakpoints";

import phoneBookOperation from '../../redux/PhoneBook/phoneBookOperation';
import phoneBookAction from "../../redux/PhoneBook/phoneBookActions";
import phoneBookSelectors from '../../redux/PhoneBook/phoneBookSelectors.js';

import Notification from "../../components/Notification/Notification.js";
import ContactList from '../../components/ContactList/ContactList.js';
import FilterContacts from '../../components/FilterContacts/FilterContacts.tsx';
import ContactForm from '../../components/ContactForm/ContactForm.tsx';

import s from './App.module.css';

const PhoneBookView=()=> {
  const dispatch = useDispatch();
  const typeDevice = screen();
  const isMobile = typeDevice === 'mobile';

  const [isExistWord, setIsExistWord] = useState(false);
  const contacts = useSelector(phoneBookSelectors.getContacts);

  const list = useSelector(phoneBookSelectors.getConatctList).reverse();

  const newList = isMobile ? createArray(list, 10) : createArray(list, 20);

  useEffect(() => {
    dispatch(phoneBookOperation.fetchContact());
  }, []);

  const isContacts = contacts.length;
  const isShowFindCOntact = isContacts >= 2;
  const isShowContactList = isContacts !== 0;

  const addWord = (data) => {
    setIsExistWord(false);
    const isWord = contacts.find(el => el.word === data.word);
    !isWord ? dispatch(phoneBookOperation.addContact(data)) : setIsExistWord(true);
  }
  const filtred = (value) => dispatch(phoneBookAction.changeFilter(value));
  const removeWords = (id) => dispatch(phoneBookOperation.removeContact(id));
  return (
    <>
      {isExistWord && <Notification/>}
      <ContactForm addWord={addWord}/>
      <CSSTransition
        in={isShowFindCOntact}
        timeout={250}
        unmountOnExit
        classNames={s}
      >
        <FilterContacts filtred={filtred}/>
      </CSSTransition>

      {isShowContactList && <ContactList removeWords={removeWords} newList={newList}/>}
    </>
  );
}

export default PhoneBookView;


