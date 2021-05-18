import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useAppDispatch} from "../../redux/store";

import phoneBookOperation from '../../redux/PhoneBook/phoneBookOperation';
import phoneBookSelectors from '../../redux/PhoneBook/phoneBookSelectors';

import {content} from "../../types/types";

import s from './VocabularyLearn.module.scss';


function VocabularyLearn() {
    const [idx, setIdx] = useState<number>(0);
    const [istranslate, setIstranslate] = useState<boolean>(false);

    const contacts: content[] = useSelector(phoneBookSelectors.getContacts);
    const contLength: number = contacts.length;
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (contacts.length === 0) dispatch(phoneBookOperation.fetchContact());
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
                    <h3>{contacts[idx]?.word}</h3>
                    <h3 className={s.translate}>{istranslate ? contacts[idx]?.translate : null}</h3>
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
