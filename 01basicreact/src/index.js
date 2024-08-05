import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const Root = ReactDOM.createRoot(document.getElementById('root'));//from index.html
Root.render(
  <React.StrictMode>
    <App />
    {/* now we have render function naming "App" from App.js */}
  </React.StrictMode>
);

