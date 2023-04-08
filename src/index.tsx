import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {setupStore} from "./store/store";
import {Provider} from "react-redux";
import App from "./app/App";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const store = setupStore()

root.render(
    <Provider store={store}>
        <App/>
    </Provider>,
);

reportWebVitals();
