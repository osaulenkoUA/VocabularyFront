import {createAction} from '@reduxjs/toolkit';
import {content} from '../../types/types'

const addWordRequest = createAction('vocabulary/addRequest');
const addWordSuccess = createAction<content>('vocabulary/addSuccess');
const addWordError = createAction<{}>('vocabulary/addError');

const fetchWordsRequest = createAction('vocabulary/fetchRequest');
const fetchWordsSuccess = createAction<content[]>('vocabulary/fetchSuccess');
const fetchWordsError = createAction<{}>('vocabulary/fetchError');

const removeWordRequest = createAction('vocabulary/removeRequest');
const removeWordSuccess = createAction<string>('vocabulary/removeSuccess');
const removeWordError = createAction<{}>('vocabulary/removeError');

const updateWordRequest = createAction('vocabulary/updateRequest');
const updateWordSuccess = createAction<content>('vocabulary/updateSuccess');
const updateWordError = createAction<{}>('vocabulary/updateError');

const changeFilter = createAction<string>('vocabulary/changeFilter');

const resetWordList = createAction('vocabulary/resetWordList');


export default {
    addWordRequest,
    addWordSuccess,
    addWordError,
    //
    fetchWordsRequest,
    fetchWordsSuccess,
    fetchWordsError,
    //
    removeWordRequest,
    removeWordSuccess,
    removeWordError,
    //
    updateWordRequest,
    updateWordSuccess,
    updateWordError,
    //
    changeFilter,
    resetWordList
};
