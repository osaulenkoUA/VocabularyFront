import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import phoneBookOperation from '../../redux/PhoneBook/phoneBookOperation';
import phoneBookSelectors from '../../redux/PhoneBook/phoneBookSelectors.js';

import s from './VocabularyLearn.module.scss';

function VocabularyLearn() {
  const [idx, setIdx] = useState(0);
  const [istranslate, setIstranslate] = useState(false);

  const contacts = useSelector(phoneBookSelectors.getContacts);
  const contLength = contacts.length;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(phoneBookOperation.fetchContact());
  }, []);

  const random = (min, max) => min + Math.random() * (max - min);
  const showTranslate = () => setIstranslate(true);

  const next = () => {
    setIstranslate(false);
    const number = Math.floor(random(0, contLength));
    number === idx ? setIdx(idx + 1) : setIdx(number);
  };

  return (
    <div className={s.wrapper}>
      <h2>Learning</h2>

      <div className={s.content}>
        <h3>{contacts[idx]?.word}</h3>
        <h3 className={s.translate}>{istranslate ? contacts[idx]?.translate : null}</h3>
      </div>

      <div className={s.wrapBtn}>
        <button onClick={next}>Next</button>
        <button onClick={showTranslate}>Translate</button>
      </div>
    </div>
  );
}

export default VocabularyLearn;
