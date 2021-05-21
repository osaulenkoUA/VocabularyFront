import React, {FC, ReactElement, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import {useAppDispatch} from '../../redux/store'
import createArray from '../../helpers/createArray'
import screen from "../../helpers/breakpoints";

import vocabularyOperation from '../../redux/Vocabulary/vocabularyOperation';
import vocabularyActions from "../../redux/Vocabulary/vocabularyActions";
import vocabularySelectors from '../../redux/Vocabulary/vocabularySelectors';
import VocabularyList from '../../components/VocabularyList/VocabularyList';
import FilterVocabulary from '../../components/FilterVocabulary/FilterVocabulary';
import VocabularyForm from '../../components/VocabularyForm/VocabularyForm';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {addWord, content} from '../../types/types'

import s from './VocabularyView.module.css';

const VocabularyView: FC = (): ReactElement => {
    const dispatch = useAppDispatch();

    const typeDevice: string = screen();
    const isMobile: boolean = typeDevice === 'mobile';

    const words: content[] = useSelector(vocabularySelectors.getWords);

    const list: content[] = useSelector(vocabularySelectors.getWordList);
    const newList: content[] = isMobile ? createArray(list, 10) : createArray(list, 20);

    useEffect(() => {
        if (words.length === 0) dispatch(vocabularyOperation.fetchWords());
    }, []);


    const isWords: number = words.length;
    const isShowFindWords: boolean = isWords >= 2;
    const isShowWordList: boolean = isWords !== 0;

    const postWord = (data: addWord) => {
        if (!data.word || !data.translate) {
            toast('Empty fields! Check word and translate!');
            return;
        }
        const isWord = words.find(el => el.word === data.word);
        !isWord ? dispatch(vocabularyOperation.postWord(data)) : toast('Word exist in your vocabulary');
    }

    const filtred = (value: string) => dispatch(vocabularyActions.changeFilter(value));
    const removeWords = (id: string) => dispatch(vocabularyOperation.removeWord(id));

    return (
        <>
            <ToastContainer/>
            <VocabularyForm postWord={postWord}/>
            <CSSTransition
                in={isShowFindWords}
                timeout={250}
                unmountOnExit
                classNames={s}
            >
                <FilterVocabulary filtred={filtred}/>
            </CSSTransition>

            {isShowWordList && <VocabularyList removeWords={removeWords} newList={newList}/>}
        </>
    );
}

export default VocabularyView;


