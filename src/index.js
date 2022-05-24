import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import { BrowserRouter } from 'react-router-dom';

// css
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'simple-line-icons/css/simple-line-icons.css';
import 'flag-icon-css/css/flag-icons.min.css';
import './index.css';
import './scss/react.scss';
import 'bootstrap-social/bootstrap-social.css';

// ========================================

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
