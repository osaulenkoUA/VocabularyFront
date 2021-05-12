import { createSelector } from '@reduxjs/toolkit';

const getContacts = (state) => state.contacts.items;

const getLoading = (state) => state.contacts.loading;

const getFilter = (state) => state.contacts.filter;

const getTheme = (state) => state.PhBookTheme.theme;

const getConatctList = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(({ word }) =>
      word.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    );
  },
);





export default {
  getContacts,
  getFilter,
  getLoading,
  getTheme,
  getConatctList,
};
