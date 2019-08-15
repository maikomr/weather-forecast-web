import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './App';

import * as serviceWorker from './serviceWorker';

import './index.scss';

import weatherForecastReducer from './reducers/weatherForecastReducer';

const middleware = applyMiddleware(thunk);
let store = compose(createStore)(weatherForecastReducer, middleware);

const root = (
    <Provider store={store}>
        <App />
    </Provider>
);
ReactDOM.render(root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
