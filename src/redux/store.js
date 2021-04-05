import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import phoneBookReducer from './PhoneBook/phoneBookReducer.js';
import PBThemeReducer from './PhoneBook/PBThemeReducer.js';
import authReducer from './auth/authReducer.js';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    contacts: phoneBookReducer,
    PhBookTheme: PBThemeReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
});

export const persistor = persistStore(store);
