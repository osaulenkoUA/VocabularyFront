import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useAppDispatch} from "../../redux/store";

import vocabularyOperation from '../../redux/Vocabulary/vocabularyOperation';
import vocabularySelectors from '../../redux/Vocabulary/vocabularySelectors';
import SpinnerVocabulary from "../../components/SpinnerCircle/SpinnerVocabulary";

import {content} from "../../types/types";

import s from './VocabularyLearn.module.scss';


const VocabularyLearn = () => {
    const dispatch = useAppDispatch();
    const [idx, setIdx] = useState<number>(0);

    const [istranslate, setIstranslate] = useState<boolean>(false);
    const loading = useSelector(vocabularySelectors.getLoading);
    const words: content[] = useSelector(vocabularySelectors.getWords);

    const learnList = words.filter(word => !word.learned);
    const contLength: number = learnList.length;

    useEffect(() => {
        if (words.length === 0) dispatch(vocabularyOperation.fetchWords());
    }, []);

    const random = (min: number, max: number): number => min + Math.random() * (max - min);

    const showTranslate = () => setIstranslate(true);

    const next = () => {
        setIstranslate(false);
        const number: number = Math.floor(random(0, contLength));
        number === idx ? setIdx(idx + 1) : setIdx(number);
    };

    const onHandleLearned = () => {
        const id = learnList[idx]?._id;
        dispatch(vocabularyOperation.updateWord(id, {learned: true}));
    }

    return (
        <div className={s.wrapper}>

            {loading&&<SpinnerVocabulary/>}

            <h2>Check of knolwledge</h2>

            <div className={s.check}>
                <p>words for checking: {contLength}</p>
                <div className={s.content}>
                    <h3 className={s.word}>{learnList[idx]?.word}</h3>
                    <h3 className={s.translate}>{istranslate ? learnList[idx]?.translate : null}</h3>
                </div>
            </div>

            <div className={s.wrapBtn}>
                <button onClick={onHandleLearned}>Learned</button>
                <button onClick={showTranslate}>Translate</button>
                <button onClick={next}>Next word</button>
            </div>

        </div>
    )
}

export default VocabularyLearn;
