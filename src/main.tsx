import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css';
import { persistor, store } from "./store/store";
import { PersistGate } from 'redux-persist/integration/react'
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <PersistGate persistor={persistor}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PersistGate>
</Provider>
)
