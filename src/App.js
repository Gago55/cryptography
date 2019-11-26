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
        <a target="_blank" href={'https://www.browserling.com/tools/des-decrypt'}>DES Decryptor</a><br/>
        <a target="_blank" href={'https://www.browserling.com/tools/triple-des-decrypt'}>TripleDES Decryptor</a><br/>
        <a target="_blank" href={'http://des.online-domain-tools.com/'}>GDES Decryptor</a><br/>
      </div>
    </Provider>
  )
}

export default App
