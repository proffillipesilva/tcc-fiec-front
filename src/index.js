import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { createStore} from 'redux';

import reducer from './redux/reducer';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useIntl } from 'react-intl';
import { addLocaleData, IntlProvider } from 'react-intl'
import { flattenMessages } from './internationalization/utils'
import messages from './internationalization/messages'

const store = createStore(reducer);
let locale = navigator.language;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="609225504796-b42ba3tdkbiq6k76rlja6nsiec8bm391.apps.googleusercontent.com">
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
