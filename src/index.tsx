import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {CookiesProvider} from "react-cookie";
import 'semantic-ui-css/semantic.min.css'
import {createStore, Store} from 'redux'
import {Provider as StoreProvider} from "react-redux";
import {ApplicationState, rootReducer} from "./redux/rootReducer";
import {devToolsEnhancer} from "redux-devtools-extension/index";
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL

const store: Store<ApplicationState> = createStore(rootReducer, devToolsEnhancer({}));

ReactDOM.render(
    <React.StrictMode>
        <CookiesProvider>
            <StoreProvider store={store}>
                <App/>
            </StoreProvider>
        </CookiesProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
