import {combineReducers} from 'redux';
import {createReducer} from '@reduxjs/toolkit';
import authActions from './authActions';
import {userCurrent} from '../../types/user'

type PayloadAddUser = {
    payload: {
        token: string;
        user: userCurrent;
    };
}
type PayloadGetUser = {
    payload: {
        email: string;
        id: string;
        name: string;
    }
}

const initialState: userCurrent = {
    name: '',
    email: '',
};

const addUser = (state: userCurrent, {payload}: PayloadAddUser) => payload.user;
const getUser = (state: userCurrent, {payload}: PayloadGetUser) => payload;

const user = createReducer(initialState, builder => {
    builder.addCase(authActions.registerSuccess, addUser);
    builder.addCase(authActions.logInSuccess, addUser);
    builder.addCase(authActions.logOutSuccess, () => initialState);
    builder.addCase(authActions.getCurrentUserSuccess, getUser)
})

const token = createReducer('', builder => {
    builder.addCase(authActions.registerSuccess, (state: string, {payload}: PayloadAddUser) => payload.token);
    builder.addCase(authActions.logInSuccess, (state: string, {payload}: PayloadAddUser) => payload.token);
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
