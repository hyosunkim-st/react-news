import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

import { createStore } from 'redux';
import rootReducer from './modules/index';
import { Provider } from 'react-redux';

const store = createStore(rootReducer); 

ReactDOM.render(
  <Provider store = {store}>
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  </Provider>,
  document.getElementById('root')
  );
   
  serviceWorker.unregister();