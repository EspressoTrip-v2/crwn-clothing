import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/* ROUTER MODULE */
import { BrowserRouter } from 'react-router-dom';

/* PROVIDER WRAPPER */
import { Provider } from 'react-redux';
/* REDUX STATE STORE */
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
