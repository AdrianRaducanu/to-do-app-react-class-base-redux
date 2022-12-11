import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {store} from '../src/redux/store'

//Actions - describe what i m gonna do

//Reducer - primeste starea initiala si actiunea care se va aplica => returneaza starea de dupa actiune

//Store - locul in care se pastreaza datele

//Dispatch - trigger actions

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
