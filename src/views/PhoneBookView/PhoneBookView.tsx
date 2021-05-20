import React, {FC, ReactElement, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import {useAppDispatch} from '../../redux/store'
import createArray from '../../helpers/createArray'
import screen from "../../helpers/breakpoints";

import phoneBookOperation from '../../redux/PhoneBook/phoneBookOperation';
import phoneBookAction from "../../redux/PhoneBook/phoneBookActions";
import phoneBookSelectors from '../../redux/PhoneBook/phoneBookSelectors';
import ContactList from '../../components/ContactList/ContactList';
import FilterContacts from '../../components/FilterContacts/FilterContacts';
import ContactForm from '../../components/ContactForm/ContactForm';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {addWord, content} from '../../types/types'

import s from './VocabularyView.module.css';

const PhoneBookView: FC = (): ReactElement => {
    const dispatch = useAppDispatch();

    const typeDevice: string = screen();
    const isMobile: boolean = typeDevice === 'mobile';

    const contacts: content[] = useSelector(phoneBookSelectors.getContacts);

    const list: content[] = useSelector(phoneBookSelectors.getConatctList);
    const newList: content[] = isMobile ? createArray(list, 10) : createArray(list, 20);

    useEffect(() => {
        if (contacts.length === 0) dispatch(phoneBookOperation.fetchContact());
    }, []);


    const isContacts: number = contacts.length;
    const isShowFindCOntact: boolean = isContacts >= 2;
    const isShowContactList: boolean = isContacts !== 0;

    const addWord = (data: addWord) => {
        if (!data.word || !data.translate) {
            toast('Empty fields! Check word and translate!');
            return;
        }
        const isWord = contacts.find(el => el.word === data.word);
        !isWord ? dispatch(phoneBookOperation.addContact(data)) : toast('Word exist in your vocabulary');
    }

    const filtred = (value: string) => dispatch(phoneBookAction.changeFilter(value));
    const removeWords = (id: string) => dispatch(phoneBookOperation.removeContact(id));

    return (
        <>
            <ToastContainer/>
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


