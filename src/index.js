import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

// import { composeWithDevTools } from 'redux-devtools-extension';
// import { createStore } from 'redux';


// const store = createStore(reducers, composeWithDevTools());
//   // , /* preloadedState, */
//   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

//   const reducers
ReactDOM.render(
  // <Provider store={store}>
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  // </Provider>,
  document.getElementById('root')
  );
   
  serviceWorker.unregister();