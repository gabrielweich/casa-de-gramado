import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'typeface-montserrat';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'


import UsuarioReducer from './reducers/UsuarioReducer'
import ReservaReducer from './reducers/ReservaReducer'

const rootReducer = combineReducers({
    reserva: ReservaReducer,
    usuario: UsuarioReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
