import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {setupStore} from "./store/store";
import {Provider} from "react-redux";
import {ListSwitcher} from "./features/listSwitcher/ListSwitcher";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const store = setupStore()

root.render(
    <Provider store={store}>
        <ListSwitcher/>
    </Provider>,
);

reportWebVitals();
