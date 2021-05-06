import React from 'react';
import './index.css';
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as serviceWorker from "./serviceworker.js";

// eslint-disable-next-line react/jsx-no-undef
ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();