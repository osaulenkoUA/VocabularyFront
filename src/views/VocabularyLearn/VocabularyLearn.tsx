import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useAppDispatch} from "../../redux/store";

import vocabularyOperation from '../../redux/Vocabulary/vocabularyOperation';
import vocabularySelectors from '../../redux/Vocabulary/vocabularySelectors';

import {content} from "../../types/types";

import s from './VocabularyLearn.module.scss';


function VocabularyLearn() {
    const [idx, setIdx] = useState<number>(0);
    const [istranslate, setIstranslate] = useState<boolean>(false);

    const words: content[] = useSelector(vocabularySelectors.getWords);
    const contLength: number = words.length;
    const dispatch = useAppDispatch();

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

    return (
        <div className={s.wrapper}>

            <h2>Check of knolwledge</h2>

            <div className={s.check}>
                <div className={s.content}>
                    <h3 className={s.word}>{words[idx]?.word}</h3>
                    <h3 className={s.translate}>{istranslate ? words[idx]?.translate : null}</h3>
                </div>
            </div>

            <div className={s.wrapBtn}>
                <button onClick={showTranslate}>Translate</button>
                <button onClick={next}>Next word</button>
            </div>

        </div>
    );
}

export default VocabularyLearn;
