import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import {
    BrowserRouter as Router, Route,
} from "react-router-dom";

import { Provider } from 'react-redux';
import store from './components/redux/store';


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>
    , document.getElementById('root'));