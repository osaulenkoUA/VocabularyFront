import React, {ChangeEvent, FC, FormEvent, ReactElement, useState} from 'react';


import s from './VocabularyFormUpdate.module.scss';
import {useAppDispatch} from "../../redux/store";
import vocabularyOperation from "../../redux/Vocabulary/vocabularyOperation";


type PropTypes = {
    children?: never;
    uword: string;
    utranslate: string;
    id: string;
    onUpdateWord: () => void;
}


const VocabularyFormUpdate: FC<PropTypes> = ({uword, utranslate, id, onUpdateWord}: PropTypes): ReactElement => {
    const [word, setWord] = useState(uword);
    const [translate, setTranslate] = useState(utranslate);

    const dispatch = useAppDispatch();

    const updateWord = ({target}: ChangeEvent<HTMLInputElement>) => setWord(target.value);
    const updateTranslate = ({target}: ChangeEvent<HTMLInputElement>) => setTranslate(target.value);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await dispatch(vocabularyOperation.updateWord(id, {word, translate}));
        // await dispatch(vocabularyOperation.fetchWords());
        onUpdateWord();

    }

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <input
                className={s.form__input}
                type="text"
                value={word}
                onChange={updateWord}
                name="word"
                placeholder="word"
            />
            <input
                className={s.form__input}
                type="text"
                value={translate}
                onChange={updateTranslate}
                name="translate"
                placeholder="translate"
            />
            <button type="submit" className={s.form__btn}>
                Update
            </button>
        </form>
    );
}

export default VocabularyFormUpdate;


VocabularyFormUpdate.defaultProps = {
    id: '',
    uword: '',
    utranslate: ''
};
