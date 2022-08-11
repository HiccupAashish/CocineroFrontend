import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './components/store/store';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CocineroProvider } from './components/Context/Context';
// import {createBrowserHistory} from 'history'
// export const customHistory = createBrowserHistory();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <CocineroProvider>
    <Provider store={store}>
        <BrowserRouter >
          <App />
        </BrowserRouter>
    </Provider>
    </CocineroProvider>
 
);


reportWebVitals();
