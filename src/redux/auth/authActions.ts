import { createAction } from '@reduxjs/toolkit';
import {userCurrent,Error} from "../../types/user";

 type payload={
   token:string;
   user:userCurrent;

}
type CurrentUser={
  email:string;
  id:string;
  name:string;
}

// --------------------------------------------------------------------------------------

const registerRequest = createAction('auth/registerRequest');
const registerSuccess = createAction<payload>('auth/registerSuccess');
const registerError = createAction<{}>('auth/registerError');

const logInRequest = createAction('auth/logInRequest');
const logInSuccess = createAction<payload>('auth/logInSuccess');
const logInError = createAction<Error>('auth/logInError');

const logOutRequest = createAction('auth/logOutRequest');
const logOutSuccess = createAction('auth/logOutSuccess');
const logOutError = createAction<{}>('auth/logOutError');

const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction<CurrentUser>('auth/getCurrentUserSuccess');
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
