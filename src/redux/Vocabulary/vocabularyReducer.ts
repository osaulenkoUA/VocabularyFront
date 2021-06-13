import {combineReducers} from 'redux';
import {createReducer} from '@reduxjs/toolkit';
import {content} from "../../types/types"
import vocabularyActions from './vocabularyActions';

type ActionFeth = {
    payload: content[];
}
type ActionRemove = {
    payload: string;
}
type ActionAdd = {
    payload: content;
}
const onUpdateWord=(state:content[],{payload}:ActionAdd):content[]=>[...state,payload];
const onAddWord= (state: content[], {payload}: ActionAdd): content[] => [payload,...state];
const fetchWords = (state: content[], {payload}: ActionFeth): Array<content> => payload;
const onRemoveWord = (state: content[], {payload}: ActionRemove): content[] =>
    state.filter(item => item._id !== payload);


const initState: content[] = [];
const items = createReducer(initState, builder => {
    builder.addCase(vocabularyActions.addWordSuccess, onAddWord);
    builder.addCase(vocabularyActions.fetchWordsSuccess, fetchWords);
    builder.addCase(vocabularyActions.removeWordSuccess, onRemoveWord);
    builder.addCase(vocabularyActions.resetWordList, ()=>initState);
    builder.addCase(vocabularyActions.updateWordSuccess, onUpdateWord);


});

const filter = createReducer('', builder => {
    builder.addCase(vocabularyActions.changeFilter, (state: string, {payload}) => payload,);
});


const loading = createReducer(false, builder => {

    builder.addCase(vocabularyActions.addWordRequest, () => true);
    builder.addCase(vocabularyActions.addWordSuccess, () => false);
    builder.addCase(vocabularyActions.addWordError, () => false);
    builder.addCase(vocabularyActions.fetchWordsRequest, () => true);
    builder.addCase(vocabularyActions.fetchWordsSuccess, () => false);
    builder.addCase(vocabularyActions.fetchWordsError, () => false);
    builder.addCase(vocabularyActions.removeWordRequest, () => true);
    builder.addCase(vocabularyActions.removeWordSuccess, () => false);
    builder.addCase(vocabularyActions.removeWordError, () => false);
})

export default combineReducers({items, filter, loading});
