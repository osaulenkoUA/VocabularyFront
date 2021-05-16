import React from 'react';
import ReactDOM from 'react-dom';
import {persistor, store} from './redux/store';
import {Provider} from 'react-redux';
import './styles/index.scss';
import {PersistGate} from 'redux-persist/integration/react';
import App from './components/App';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>,
    document.querySelector('#root'),
);
