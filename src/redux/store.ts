import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import {useDispatch} from 'react-redux';

import vocabularyReducer from './Vocabulary/vocabularyReducer';
import authReducer from './auth/authReducer';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        words: vocabularyReducer,
        auth: persistReducer(authPersistConfig, authReducer),
    },

});
export type RootState = ReturnType<typeof store.getState>

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>() // Export a hook that can be reused to resolve types