import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/* ROUTER MODULE */
import { BrowserRouter } from 'react-router-dom';

/* PROVIDER WRAPPER */
import { Provider } from 'react-redux';

/* REDUX STATE STORE */
import { store, persistor } from './redux/store';

/* REDUX PERSIST */
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
