import React, {ChangeEvent, FC, FormEvent, ReactElement, useState} from 'react';
import {CSSTransition} from 'react-transition-group';

import Notification from '../Notification/Notification.js';

import s from './ContactForm.module.scss';

interface data {
    word?: string;
    translate?: string;
}

type PropTypes = {
    addWord: ({word, translate}: data) => void;
    children?: never;
}


const ContactForm: FC<PropTypes> = ({addWord}: PropTypes): ReactElement => {
    const [word, setWord] = useState<string>('');
    const [translate, setTranslate] = useState<string>('');

    const updateWord = ({target}: ChangeEvent<HTMLInputElement>) => setWord(target.value);
    const updateTranslate = ({target}: ChangeEvent<HTMLInputElement>) => setTranslate(target.value);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addWord({word, translate});
        setWord('');
        setTranslate('');
    }

    return (
        <>
            <CSSTransition in={false} unmountOnExit classNames={s} timeout={350}>
                <Notification/>
            </CSSTransition>

            <form onSubmit={handleSubmit} className={s.form}>
                <input
                    className={s.form__input}
                    type="text"
                    value={word}
                    onChange={updateWord}
                    name="word"
                    placeholder="word"
                />

                <button type="submit" className={s.form__btn}>
                    Add Word
                </button>
                <input
                    className={s.form__input}
                    type="text"
                    value={translate}
                    onChange={updateTranslate}
                    name="translate"
                    placeholder="translate"
                />
            </form>
        </>
    );
}

export default ContactForm;


ContactForm.defaultProps = {
    addWord: () => {
    }
};
