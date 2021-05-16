import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import authActions from './authActions.js';
import phoneBookActions from "../PhoneBook/phoneBookActions";

interface user {
  name:string;
  email:string;
  password?:string;
  passwordConfirm?:string;
}

const initialState:user = {
  name: '',
  email: '',
};

const addUser = (state, { payload }) => payload.user;
const getUser = (state, { payload }) => payload;

const user=createReducer(initialState,builder => {
  builder.addCase(authActions.registerSuccess,addUser);
  builder.addCase(authActions.logInSuccess,addUser);
  builder.addCase(authActions.logOutSuccess,()=>initialState);
  builder.addCase(authActions.getCurrentUserSuccess,getUser)

})

const token =createReducer(null,builder => {
  builder.addCase(authActions.registerSuccess,(state,{payload}:any)=>payload.token);
  builder.addCase(authActions.logInSuccess,(state,{payload}:any)=>payload.token);
  builder.addCase(authActions.logInSuccess,()=>null);
})

const loading = createReducer(false,builder => {
  builder.addCase(authActions.registerRequest,() => true);
  builder.addCase(authActions.registerSuccess,() => false);
  builder.addCase(authActions.registerError,() => false);
  builder.addCase(authActions.logInRequest,() => true);
  builder.addCase(authActions.logInSuccess,() => false);
  builder.addCase(authActions.logInError,() => false);

} )




export default combineReducers({ user, token, loading });
