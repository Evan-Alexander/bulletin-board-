import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Board count={25} />, document.getElementById('react-container'));
registerServiceWorker();
