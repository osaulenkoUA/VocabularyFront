import { createSelector } from '@reduxjs/toolkit';
import {content}from "../../types/types"
import {RootState} from '../store';

const getContacts = (state:RootState) => state.contacts.items;

const getLoading = (state:RootState) => state.contacts.loading;

const getFilter = (state:RootState) => state.contacts.filter;


const getConatctList= createSelector(
  [getContacts, getFilter],
  (contacts:content[], filter:string):content[] => {
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
