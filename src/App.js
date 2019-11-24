import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store';
import Cryptography from './components/Cryptography';

function App() {
  return (
    <Provider store={store}>
      <Cryptography />
    </Provider>
  )
}

export default App
