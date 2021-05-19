import {createSelector} from '@reduxjs/toolkit';
import {addWord, content} from "../../types/types"
import {RootState} from '../store';

const getContacts = (state: RootState) => state.contacts.items;

const getLoading = (state: RootState) => state.contacts.loading;

const getFilter = (state: RootState) => state.contacts.filter;


const getConatctList = createSelector(
    [getContacts, getFilter],
    (contacts: content[], filter: string): content[] => {
        return contacts.filter(({word, translate}:addWord) =>
            word?.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) || translate?.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
        );
    },
);

export default {
    getContacts,
    getFilter,
    getLoading,
    getConatctList,
};
