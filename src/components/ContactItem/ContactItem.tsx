import React, {FC} from 'react';
import {content} from '../../types/types'

import IconClose from '../assets/Svg/IconClose';

import s from './ContactListItem.module.scss';

type PropTypes = {
    elem: content;
    removeWords: (_id: string) => void;
    children?: never;
}

const ContactItem: FC<PropTypes> = ({elem, removeWords}: PropTypes) => {
    const {word, translate, _id} = elem;
    return (
        <div key={word} className={s.list__item}>
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
    );
};

export default ContactItem;

ContactItem.defaultProps = {
    elem: {word:'',translate:'',userId:'',_id:''},
    removeWords: () => {
    }
};