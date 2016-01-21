import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App.jsx';
import rootReducer from './reducers'

import './styles/style.styl';

let store = createStore(rootReducer);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'));