import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppComponent from './AppComponent';
import store from './store'

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <AppComponent />
      </Provider>
  </React.StrictMode>,
  document.getElementById('app-root')
);
