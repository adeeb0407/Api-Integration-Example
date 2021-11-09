import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import {rootReducer} from './reducers/index';
import thunk from 'redux-thunk';

const store = createStore( rootReducer, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store} >
    <Main />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);