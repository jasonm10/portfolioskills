import React from 'react';
import ReactDOM from 'react-dom'; //API containing following methods and a few more. render() findDOMNode() unmountComponentAtNode()
import './index.css'; //styles
import App from './containers/App';
import * as serviceWorker from './serviceWorker'; //not something we're using
import 'tachyons'; // fonts
// import { robots } from './archive/robots'; //arrays of information

ReactDOM.render(
  <App />
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
