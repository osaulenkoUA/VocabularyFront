import axios from 'axios';

import phoneBookAction from './phoneBookActions';
import {AppDispatch} from '../store';
axios.defaults.baseURL = 'https://sleepy-escarpment-78189.herokuapp.com';

interface content {
  word?: string;
  translate?: string;
  _id?:string;
  userId?:string
}

type addData= {
 data:content;
}
type getData= {
  data:content[];
}
const addContact = ({ word, translate }:content) => async (dispatch:AppDispatch) => {
  dispatch(phoneBookAction.addContactRequest());
  try {
    const { data }:addData = await axios.post('/vocabulary/addword', { word, translate });
    dispatch(phoneBookAction.addContactSuccess(data));
  } catch (error) {
    dispatch(phoneBookAction.addContactError(error));
  }
};

const fetchContact = () => async (dispatch:AppDispatch) => {
  dispatch(phoneBookAction.fetchContactsRequest());
  try {
    const { data }:getData = await axios.get('/vocabulary/words');
    dispatch(phoneBookAction.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(phoneBookAction.fetchContactsError(error));
  }
};

const removeContact = (id:string)=> async (dispatch:AppDispatch) => {
  dispatch(phoneBookAction.removeContactsRequest());
  try {
    axios.delete(`/vocabulary/delete/${id}`);
    dispatch(phoneBookAction.removeContactsSuccess(id));
  } catch (error) {
    dispatch(phoneBookAction.removeContactsError(error));
  }
};

export default {
  addContact,
  fetchContact,
  removeContact,
};
