import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../configure-store';
import App from './App';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('#app')
  );
});
