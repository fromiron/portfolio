import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './components/serviceWorker';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './screens/App';
import Nav from "./components/NavMenu";

ReactDOM.render(
    <BrowserRouter>
        <Nav/>
        <App/>
    </BrowserRouter>
    ,
    document.getElementById('root')
);


serviceWorker.unregister();
