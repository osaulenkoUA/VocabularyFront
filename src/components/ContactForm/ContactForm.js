import React, {useState} from 'react';
import {CSSTransition} from 'react-transition-group';

import Notification from '../Notification/Notification.js';

import s from './ContactForm.module.scss';

function ContactForm({foo}) {
    const [word, setWord] = useState('');
    const [translate, setTranslate] = useState('');

    const updateWord = ({target}) => setWord(target.value);
    const updateTranslate = ({target}) => setTranslate(target.value);

    function handleSubmit() {
        foo({word, translate});
        setWord('');
        setTranslate('');
    }

    return (
        <>
            <CSSTransition in={false} unmountOnExit classNames={s} timeout={350}>
                <Notification/>
            </CSSTransition>

            <form className={s.form}>
                <input
                    className={s.form__input}
                    type="text"
                    value={word}
                    onChange={updateWord}
                    name="word"
                    placeholder="word"
                />

                <button type="button" onClick={handleSubmit} className={s.form__btn}>
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
    foo: () => {
    }
};
