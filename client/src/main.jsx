import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from "./routes"
import { Provider } from 'react-redux'
import { store } from './redux/store'


// <React.StrictMode>: This is a wrapper to highlight potential problems in your application during development.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <Provider store={store}>

      <RouterProvider router={router}>
      <App />
      </RouterProvider>

    </Provider>

  </React.StrictMode>
);

