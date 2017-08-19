import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Accounts from 'web3-eth-accounts';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
