import axios from 'axios';
import {userCurrent} from '../../types/user';
import authActions from './authActions';
import {AppDispatch, RootState} from "../store";

axios.defaults.baseURL = 'https://sleepy-escarpment-78189.herokuapp.com';

const token = {
    set(token: string) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

interface request {
    user: userCurrent;
    token: string;
}

type getUser = {
    data: request;
}

type CurrentUser = {
    data: {
        email: string;
        id: string;
        name: string;
    }
}

const register = ({name, email, password, passwordConfirm}: userCurrent) => async (
    dispatch: AppDispatch,
) => {
    dispatch(authActions.registerRequest());
    try {
        const {data}: getUser = await axios.post('/users/signup', {
            name,
            email,
            password,
            passwordConfirm,
        });
        token.set(data.token);
        dispatch(authActions.registerSuccess(data));
    } catch (error) {
        dispatch(authActions.registerError(error));
    }
};

const logIn = ({email, password}: userCurrent) => async (dispatch: AppDispatch) => {
    dispatch(authActions.logInRequest());
    try {
        const {data}: getUser = await axios.post('/users/signin', {
            email,
            password,
        });
        token.set(data.token);
        dispatch(authActions.logInSuccess(data));
    } catch (error) {
        dispatch(authActions.logInError(error));
    }
};

const logOut = () => async (dispatch: AppDispatch) => {
    dispatch(authActions.logOutRequest());
    try {
        await axios.post('/users/logout');
        token.unset();
        dispatch(authActions.logOutSuccess());
    } catch (error) {
        dispatch(authActions.logOutError(error));
    }
};

const getCurrentUser = () => async (dispatch: AppDispatch, getState: () => RootState) => {
    const state: RootState = getState();
    const persistedToken: string = state.auth.token;
    if (!persistedToken) return;
    token.set(persistedToken);
    dispatch(authActions.getCurrentUserRequest());
    try {
        const {data}: CurrentUser = await axios.get('/users/current');
        dispatch(authActions.getCurrentUserSuccess(data));
    } catch (error) {
        dispatch(authActions.getCurrentUserError(error));
    }
};

export default {
    register,
    logIn,
    logOut,
    getCurrentUser,
};
