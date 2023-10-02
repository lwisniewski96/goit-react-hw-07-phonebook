import React from 'react';
import { createRoot } from 'react-dom/client'; // Zaktualizowany import createRoot
import { Provider } from 'react-redux';
import store from 'components/Store/Store';
import { App } from 'components/App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
