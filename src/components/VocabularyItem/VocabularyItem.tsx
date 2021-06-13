import React, {FC, useState} from 'react';

import {content} from '../../types/types';
import IconEdit from '../assets/IconEdit/IconEdit';
import IconClose from '../assets/Svg/IconClose';

import s from './VocabularyItem.module.scss';
import VocabularyFormUpdate from "../VocabularyFormUpdate/VocabularyFormUpdate";

type PropTypes = {
    elem: content;
    removeWords: (_id: string) => void;
    children?: never;
};

const VocabularyItem: FC<PropTypes> = ({elem, removeWords}: PropTypes) => {
    const {word, translate, _id} = elem;

    const [isUpdate, setIsUpdate] = useState(false);

    const onUpdateWord = () => setIsUpdate(!isUpdate);

    return (
        <div key={_id}>
            {!isUpdate && (
                <div className={s.list__item}>
                    <button className={s.btn_edit} type="button" onClick={onUpdateWord}>
                        <IconEdit/>
                    </button>
                    <span>{word}:</span>
                    <span className={s.translate}>{translate}</span>

                    <button
                        className={s.btn_delete}
                        type="button"
                        onClick={() => removeWords(_id)}
                    >
                        <IconClose/>
                    </button>
                </div>
            )}

            {isUpdate && <VocabularyFormUpdate onUpdateWord={onUpdateWord} uword={word} utranslate={translate} id={_id} />}

        </div>
    );
}

export default VocabularyItem;

VocabularyItem.defaultProps = {
    elem: {
        word: '',
        translate: '',
        userId: '',
        _id: '',
        stars: 1,
        learned: false,
    },
    removeWords: () => {
    },
};
