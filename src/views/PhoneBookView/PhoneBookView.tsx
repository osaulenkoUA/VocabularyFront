import React, {FC, ReactElement, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import {useAppDispatch} from '../../redux/store'
import createArray from '../../helpers/createArray'
import screen from "../../helpers/breakpoints";

import phoneBookOperation from '../../redux/PhoneBook/phoneBookOperation';
import phoneBookAction from "../../redux/PhoneBook/phoneBookActions";
import phoneBookSelectors from '../../redux/PhoneBook/phoneBookSelectors';

import Notification from "../../components/Notification/Notification";
import ContactList from '../../components/ContactList/ContactList';
import FilterContacts from '../../components/FilterContacts/FilterContacts';
import ContactForm from '../../components/ContactForm/ContactForm';

import {addWord, content} from '../../types/types'

import s from './App.module.css';

const PhoneBookView: FC = (): ReactElement => {
    const dispatch = useAppDispatch();

    const typeDevice: string = screen();
    const isMobile: boolean = typeDevice === 'mobile';

    const [isExistWord, setIsExistWord] = useState<boolean>(false);
    const contacts: content[] = useSelector(phoneBookSelectors.getContacts);

    const list: content[] = useSelector(phoneBookSelectors.getConatctList).reverse();

    const newList: content[] = isMobile ? createArray(list, 10) : createArray(list, 20);

    useEffect(() => {
        dispatch(phoneBookOperation.fetchContact());
    }, []);

    const isContacts: number = contacts.length;
    const isShowFindCOntact: boolean = isContacts >= 2;
    const isShowContactList: boolean = isContacts !== 0;

    const addWord = (data: addWord) => {
        setIsExistWord(false);
        const isWord = contacts.find(el => el.word === data.word);
        !isWord ? dispatch(phoneBookOperation.addContact(data)) : setIsExistWord(true);
    }
    const filtred = (value: string) => dispatch(phoneBookAction.changeFilter(value));
    const removeWords = (id: string) => dispatch(phoneBookOperation.removeContact(id));

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


