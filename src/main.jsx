import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "@fontsource/lexend-deca";
import ResetStyle from './styles/ResetStyle.js';
import GlobalStyle from './styles/GlobalStyle.js';
import UserProvider from './contexts/userContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
);
