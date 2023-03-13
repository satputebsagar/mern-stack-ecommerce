import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import {persistGate} from "redux-persist/integration/react";
import store from  "./store/index";
import {persistor} from "./store/index";
import { PersistGate } from 'redux-persist/integration/react';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App/>
      </PersistGate>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

