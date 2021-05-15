import { createSelector } from '@reduxjs/toolkit';

import {RootState} from '../store';

const getContacts = (state:RootState) => state.contacts.items;

const getLoading = (state:RootState) => state.contacts.loading;

const getFilter = (state:RootState) => state.contacts.filter;

interface data {
    word: string;
    translate: string;
    _id:string;
}
const getConatctList = createSelector(
  [getContacts, getFilter],
  (contacts:data[], filter:string) => {
    return contacts.filter(({ word }) =>
      word.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    );
  },
);





export default {
  getContacts,
  getFilter,
  getLoading,
  getConatctList,
};
