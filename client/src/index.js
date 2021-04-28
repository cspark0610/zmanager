import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
//para poder usar el logger de chrome Redux
import thunk from 'redux-thunk';
import reducers from './reducers'

//store
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>
,document.getElementById('root'))