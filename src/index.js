import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import { Provider } from 'react-redux';
// import  store  from './redux/store';


import { AuthContextProvider } from '../src/form/formcontext/AuthContext'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
    </React.StrictMode>
    );
    // <Provider store={store}>
    // </Provider>