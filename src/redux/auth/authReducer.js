import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import authActions from './authActions.js';

const initialState = {
  name: null,
  email: null,
};
const addUser = (_, { payload }) => payload.user;
const getUser = (_, { payload }) => payload;

// const onRemoveContact = (state, { payload }) =>
//   state.filter(item => item.id !== payload);

const user = createReducer(initialState, {
  [authActions.registerSuccess]: addUser,
  [authActions.logInSuccess]: addUser,
  [authActions.logOutSuccess]: () => initialState,
  [authActions.getCurrentUserSuccess]: getUser,
});
const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.logInSuccess]: (_, { payload }) => payload.token,
  [authActions.logOutSuccess]: () => null,
});

const loading = createReducer(false, {
  [authActions.registerRequest]: () => true,
  [authActions.registerSuccess]: () => false,
  [authActions.registerError]: () => false,
  [authActions.logInRequest]: () => true,
  [authActions.logInSuccess]: () => false,
  [authActions.logInError]: () => false,
});

export default combineReducers({ user, token, loading });
