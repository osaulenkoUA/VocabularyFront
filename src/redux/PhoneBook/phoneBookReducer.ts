import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {content} from "../../types/types"
import phoneBookActions from './phoneBookActions';


const onAddContact = (state:content[], {payload}:any):content[] => [...state, payload];

const onRemoveContact = (state:content[], { payload }:any):content[] =>
    state.filter(item => item._id !== payload);

const initState:content[]=[];

const items = createReducer(initState, builder =>{
  builder.addCase(phoneBookActions.addContactSuccess,onAddContact);
  builder.addCase(phoneBookActions.fetchContactsSuccess,(state:content[], { payload }:any):Array<content> => payload);
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
