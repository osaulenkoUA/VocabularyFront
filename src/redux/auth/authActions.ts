import { createAction } from '@reduxjs/toolkit';
import {user} from "../../types/user";

// --------------------------------------------------------------------------------------

const registerRequest = createAction('auth/registerRequest');
const registerSuccess = createAction<user>('auth/registerSuccess');
const registerError = createAction<{}>('auth/registerError');

const logInRequest = createAction('auth/logInRequest');
const logInSuccess = createAction<user>('auth/logInSuccess');
const logInError = createAction<{}>('auth/logInError');

const logOutRequest = createAction('auth/logOutRequest');
const logOutSuccess = createAction('auth/logOutSuccess');
const logOutError = createAction<{}>('auth/logOutError');

const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction<user>('auth/getCurrentUserSuccess');
const getCurrentUserError = createAction<{}>('auth/getCurrentUserError');

export default {
  registerRequest,
  registerSuccess,
  registerError,
  //
  logInRequest,
  logInSuccess,
  logInError,
  //
  logOutRequest,
  logOutSuccess,
  logOutError,
  //
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
};
