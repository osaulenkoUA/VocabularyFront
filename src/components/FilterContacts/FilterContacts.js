import React from 'react';
import s from './FilterContacts.module.scss';

function FilterContacts({filtred}) {
    return (
        <div className={s.findContact}>
            <p className={s.filterTitle}>Find word:</p>
            <input
                type="text"
                onChange={({target}) => filtred(target.value)}
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
