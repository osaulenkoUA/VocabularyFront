import React, {ChangeEvent, FC, FormEvent, ReactElement, useState} from 'react';


import s from './VocabularyForm.module.scss';

interface data {
    word?: string;
    translate?: string;
}

type PropTypes = {
    postWord: ({word, translate}: data) => void;
    children?: never;
}


const VocabularyForm: FC<PropTypes> = ({postWord}: PropTypes): ReactElement => {
    const [word, setWord] = useState<string>('');
    const [translate, setTranslate] = useState<string>('');

    const updateWord = ({target}: ChangeEvent<HTMLInputElement>) => setWord(target.value);
    const updateTranslate = ({target}: ChangeEvent<HTMLInputElement>) => setTranslate(target.value);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        postWord({word, translate});
        setWord('');
        setTranslate('');
    }

    return (
        <>
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

export default VocabularyForm;


VocabularyForm.defaultProps = {
    postWord: () => {
    }
};
