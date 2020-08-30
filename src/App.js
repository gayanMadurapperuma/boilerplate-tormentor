import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyApp from './navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import configureStore from './store';
import { BrowserRouter } from 'react-router-dom';
const {persistor, store} = configureStore();

function App() {
  return (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <MyApp/>
          </BrowserRouter>
        </PersistGate>
    </Provider>
  );
}

export default App;
