import {createSelector} from '@reduxjs/toolkit';
import {addWord, content} from "../../types/types"
import {RootState} from '../store';

const getContacts = (state: RootState) => {
    const itemsContact=(state.contacts.items);
    // console.log(!!itemsContact.length?itemsContact.reverse():itemsContact);
    return itemsContact;
};

const getLoading = (state: RootState) => state.contacts.loading;

const getFilter = (state: RootState) => state.contacts.filter;


const getConatctList = createSelector(
    [getContacts, getFilter],
    (contacts: content[], filter: string): content[] => {
        // console.log(contacts.reverse());
        // if (contacts.length>0)  console.log(contacts.reverse());
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
