import { createAction } from '@reduxjs/toolkit';
import {content}from '../../types/types'

const addContactRequest = createAction('phoneBook/addRequest');
const addContactSuccess = createAction<content>('phoneBook/addSuccess');
const addContactError = createAction<{}>('phoneBook/addError');

const fetchContactsRequest = createAction('phoneBook/fetchRequest');
const fetchContactsSuccess = createAction<content[]>('phoneBook/fetchSuccess');
const fetchContactsError = createAction<{}>('phoneBook/fetchError');

const removeContactsRequest = createAction('phoneBook/removeRequest');
const removeContactsSuccess = createAction<string>('phoneBook/removeSuccess');
const removeContactsError = createAction<{}>('phoneBook/removeError');

const changeFilter = createAction<string>('phoneBook/changeFilter');

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  //
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  //
  removeContactsRequest,
  removeContactsSuccess,
  removeContactsError,
  //
  changeFilter,
};
