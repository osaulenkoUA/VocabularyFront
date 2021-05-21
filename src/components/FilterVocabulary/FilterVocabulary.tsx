import React, {ChangeEvent, FC, ReactElement} from 'react';
import s from './FilterVocabulary.module.scss';


type PropTypes= {
    filtred: (value: string) => void;
    children?: never;
}


const FilterVocabulary:FC<PropTypes>=({filtred}:PropTypes):ReactElement=> {
    const onChangeFilter=({target}:ChangeEvent<HTMLInputElement>)=>filtred(target.value);

    return (
        <div className={s.findWord}>
            <p className={s.filterTitle}>Find word:</p>
            <input
                type="text"
                onChange={onChangeFilter}
                className={s.filterInput}
                placeholder="Search..."
            />
        </div>
    );
}

export default FilterVocabulary;

FilterVocabulary.defaultProps = {
    filtred: () => {
    }
};
