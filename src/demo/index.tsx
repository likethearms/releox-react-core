// import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserHistory } from 'history';
import i18next from 'i18next';
import React from 'react';
import ReactDOM from 'react-dom';
import { initReactI18next } from 'react-i18next';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import ReleoxConfig from '../config/ReleoxConfig';
import { RELEOX_STORE_NAME } from '../Globals';
import ReleoxAuthenticationsReducer from '../store/releox-authentication/ReleoxAuthenticationsReducer';
import translations from '../translations';
import Routes from './Routes';

const resources = translations;

i18next.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: process.env.NODE_ENV !== 'production',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
  resources,
});

const rootReducer = combineReducers({
  [RELEOX_STORE_NAME]: ReleoxAuthenticationsReducer.reducer,
});

const history = createBrowserHistory();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk, routerMiddleware(history)))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReleoxConfig>
        <Router history={history}>
          <Routes />
        </Router>
      </ReleoxConfig>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
