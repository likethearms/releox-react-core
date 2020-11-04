// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ReleoxConfig from '../config/ReleoxConfig';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ReleoxConfig>
      <App />
    </ReleoxConfig>
  </React.StrictMode>,
  document.getElementById('root')
);
