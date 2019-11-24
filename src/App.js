import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Cryptography from './components/Cryptography';

function App() {
  return (
    <Provider store={store}>
      <div className='root'>
        <Cryptography />
      </div>
    </Provider>
  )
}

export default App
