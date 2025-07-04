import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import Wishlist from './components/Wishlist';
import store from './redux/Store';
import 'bootstrap/dist/css/bootstrap.min.css';


 ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);




