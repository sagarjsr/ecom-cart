import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import AuthReducer from './store/reducers/AuthReducer';
import * as serviceWorker from "./serviceWorker";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const RootReducers = combineReducers({
  category: CategoryReducer,
  cart: CartReducer,
  address: AddressReducer,
  checkout: CheckoutReducer,
  auth: AuthReducer,
  order: OrderReducer,

});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
