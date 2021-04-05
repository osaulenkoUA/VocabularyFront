import axios from 'axios';

import phoneBookAction from './phoneBookActions';

axios.defaults.baseURL = 'https://sleepy-escarpment-78189.herokuapp.com';

const addContact = ({ word, translate }) => async (dispatch) => {
  dispatch(phoneBookAction.addContactRequest());
  try {
    const { data } = await axios.post('/vocabulary/addword', { word, translate });
    dispatch(phoneBookAction.addContactSuccess(data));
  } catch (error) {
    dispatch(phoneBookAction.addContactError(error));
  }
};

const fetchContact = () => async (dispatch) => {
  dispatch(phoneBookAction.fetchContactsRequest());
  try {
    const { data } = await axios.get('/vocabulary/words');
    dispatch(phoneBookAction.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(phoneBookAction.fetchContactsError(error));
  }
};

const removeContact = (id) => async (dispatch) => {
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
