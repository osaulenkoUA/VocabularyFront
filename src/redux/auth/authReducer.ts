import {combineReducers} from 'redux';
import {createReducer} from '@reduxjs/toolkit';

import authActions from './authActions';

interface user {
    name: string;
    email: string;
    password?: string;
    passwordConfirm?: string;
}

// interface payloadAuth {
//   name:string;
//   email:string;
//   id:string;
// }
// type foo={
//   payload:payloadAuth;
// }

const initialState: user = {
    name: '',
    email: '',
};

const addUser = (state: user, {payload}: any) => payload.user;
const getUser = (state: user, {payload}: any) => payload;

const user = createReducer(initialState, builder => {
    builder.addCase(authActions.registerSuccess, addUser);
    builder.addCase(authActions.logInSuccess, addUser);
    builder.addCase(authActions.logOutSuccess, () => initialState);
    builder.addCase(authActions.getCurrentUserSuccess, getUser)
})

const token = createReducer('', builder => {
    builder.addCase(authActions.registerSuccess, (state: string, {payload}: any) => payload.token);
    builder.addCase(authActions.logInSuccess, (state: string, {payload}: any) => payload.token);
    builder.addCase(authActions.logOutSuccess, () => '');
})

const loading = createReducer(false, builder => {
    builder.addCase(authActions.registerRequest, () => true);
    builder.addCase(authActions.registerSuccess, () => false);
    builder.addCase(authActions.registerError, () => false);
    builder.addCase(authActions.logInRequest, () => true);
    builder.addCase(authActions.logInSuccess, () => false);
    builder.addCase(authActions.logInError, () => false);

})


export default combineReducers({user, token, loading});
