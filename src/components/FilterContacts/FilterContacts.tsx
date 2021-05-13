import React, {ChangeEvent, FC, ReactElement} from 'react';
import s from './FilterContacts.module.scss';


type PropTypes= {
    filtred: (value: string) => void;
    children?: never;
}


const FilterContacts:FC<PropTypes>=({filtred}:PropTypes):ReactElement=> {
    const onChangeFilter=({target}:ChangeEvent<HTMLInputElement>)=>filtred(target.value);

    return (
        <div className={s.findContact}>
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

export default FilterContacts;

FilterContacts.defaultProps = {
    filtred: () => {
    }
};
