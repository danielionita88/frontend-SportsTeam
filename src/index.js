import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducers/index'
import thunk from 'redux-thunk'
import 'semantic-ui-css/semantic.min.css'


const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
