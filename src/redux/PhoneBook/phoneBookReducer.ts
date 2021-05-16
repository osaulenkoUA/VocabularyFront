import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import phoneBookActions from './phoneBookActions';

interface data {
  word: string;
  translate: string;
  _id:string;
  userId:string
}

const onAddContact = (state:data[], {payload}:any):data[] => [...state, payload];

const onRemoveContact = (state:data[], { payload }:any):data[] =>
    state.filter(item => item._id !== payload);

const initState:data[]=[];

const items = createReducer(initState, builder =>{
  builder.addCase(phoneBookActions.addContactSuccess,onAddContact);
  builder.addCase(phoneBookActions.fetchContactsSuccess,(state:data[], { payload }:any):Array<data> => payload);
  builder.addCase(phoneBookActions.removeContactsSuccess,onRemoveContact);
} );

const filter = createReducer('', builder => {
  builder.addCase(phoneBookActions.changeFilter, (state:string, { payload }) => payload,);
});



const loading = createReducer(false,builder => {

  builder.addCase(phoneBookActions.addContactRequest,() => true);
  builder.addCase(phoneBookActions.addContactSuccess,() => false);
  builder.addCase(phoneBookActions.addContactError,() => false);
  builder.addCase(phoneBookActions.fetchContactsRequest,() => true);
  builder.addCase(phoneBookActions.fetchContactsSuccess,() => false);
  builder.addCase(phoneBookActions.fetchContactsError,() => false);
  builder.addCase(phoneBookActions.removeContactsRequest,() => true);
  builder.addCase(phoneBookActions.removeContactsSuccess,() => false);
  builder.addCase(phoneBookActions.removeContactsError,() => false);
} )

export default combineReducers({ items,filter,loading });
