import {combineReducers} from 'redux';
import {createReducer} from '@reduxjs/toolkit';
import {content} from "../../types/types"
import phoneBookActions from './phoneBookActions';

type ActionFeth = {
    payload: content[];
}
type ActionRemove = {
    payload: string;
}
type ActionAdd = {
    payload: content;
}

const onAddContact = (state: content[], {payload}: ActionAdd): content[] => [...state, payload];
const fetchContact = (state: content[], {payload}: ActionFeth): Array<content> => payload;
const onRemoveContact = (state: content[], {payload}: ActionRemove): content[] =>
    state.filter(item => item._id !== payload);


const initState: content[] = [];
const items = createReducer(initState, builder => {
    builder.addCase(phoneBookActions.addContactSuccess, onAddContact);
    builder.addCase(phoneBookActions.fetchContactsSuccess, fetchContact);
    builder.addCase(phoneBookActions.removeContactsSuccess, onRemoveContact);
    builder.addCase(phoneBookActions.resetContacts, ()=>initState);

});

const filter = createReducer('', builder => {
    builder.addCase(phoneBookActions.changeFilter, (state: string, {payload}) => payload,);
});


const loading = createReducer(false, builder => {

    builder.addCase(phoneBookActions.addContactRequest, () => true);
    builder.addCase(phoneBookActions.addContactSuccess, () => false);
    builder.addCase(phoneBookActions.addContactError, () => false);
    builder.addCase(phoneBookActions.fetchContactsRequest, () => true);
    builder.addCase(phoneBookActions.fetchContactsSuccess, () => false);
    builder.addCase(phoneBookActions.fetchContactsError, () => false);
    builder.addCase(phoneBookActions.removeContactsRequest, () => true);
    builder.addCase(phoneBookActions.removeContactsSuccess, () => false);
    builder.addCase(phoneBookActions.removeContactsError, () => false);
})

export default combineReducers({items, filter, loading});
