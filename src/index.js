import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from 'react-router-dom';
import { createStore} from 'redux';

import reducer from './redux/reducer';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { IntlProvider } from 'react-intl'
import { flattenMessages } from './internationalization/utils'
import messages from './internationalization/messages'

const store = createStore(reducer);
let locale = navigator.language;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="377869314621-7mu6efqci9ki98qmega0m2nqdt0ji15h.apps.googleusercontent.com">
    <IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
  <Provider store={store}>
  <HashRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </HashRouter>
  </Provider>
  </IntlProvider>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
