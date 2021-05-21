import {createSelector} from '@reduxjs/toolkit';
import {addWord, content} from "../../types/types"
import {RootState} from '../store';

const getWords = (state: RootState) => state.words.items;



const getLoading = (state: RootState) => state.words.loading;

const getFilter = (state: RootState) => state.words.filter;


const getWordList = createSelector(
    [getWords, getFilter],
    (words: content[], filter: string): content[] => {
       return words.filter(({word, translate}:addWord) =>
            word?.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) || translate?.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
        );
    },
);

export default {
    getWords,
    getFilter,
    getLoading,
    getWordList,
};
