import axios from 'axios';
import {addWord, content} from '../../types/types'
import vocabularyActions from './vocabularyActions';
import {AppDispatch} from '../store';

axios.defaults.baseURL = 'https://sleepy-escarpment-78189.herokuapp.com';

type addData = {
    data: content;
}
type getData = {
    data: content[];
}
const postWord = ({word, translate}: addWord) => async (dispatch: AppDispatch) => {
    dispatch(vocabularyActions.addWordRequest());
    try {
        const {data}: addData = await axios.post('/vocabulary/addword', {word, translate});
        dispatch(vocabularyActions.addWordSuccess(data));
    } catch (error) {
        dispatch(vocabularyActions.addWordError(error));
    }
};

const fetchWords= () => async (dispatch: AppDispatch) => {
    dispatch(vocabularyActions.fetchWordsRequest());
    try {
        const {data}: getData = await axios.get('/vocabulary/words');
        data.reverse();
        dispatch(vocabularyActions.fetchWordsSuccess(data));
    } catch (error) {
        dispatch(vocabularyActions.fetchWordsError(error));
    }
};

const removeWord = (id: string) => async (dispatch: AppDispatch) => {
    dispatch(vocabularyActions.removeWordRequest());
    try {
        axios.delete(`/vocabulary/delete/${id}`);
        dispatch(vocabularyActions.removeWordSuccess(id));
    } catch (error) {
        dispatch(vocabularyActions.removeWordError(error));
    }
};

const updateWord = (id: string,newFields:addWord) => async (dispatch: AppDispatch) => {
    dispatch(vocabularyActions.updateWordRequest());
    try {
        const {data}: addData = await  axios.patch(`/vocabulary/update/${id}`,newFields);
        dispatch(vocabularyActions.updateWordSuccess(data));
    } catch (error) {
        dispatch(vocabularyActions.updateWordError(error));
    }
};

export default {
    postWord,
    fetchWords,
    removeWord,
    updateWord
};
