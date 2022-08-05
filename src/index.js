import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './components/store/reducer';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CocineroProvider } from './components/Context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
 <CocineroProvider>
    <Provider store={store}>
      {/* <React.StrictMode> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      {/* </React.StrictMode> */}
    </Provider>
    </CocineroProvider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
