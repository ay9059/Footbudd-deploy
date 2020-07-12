import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Bar from './Bar'
import Select from './Select'
import 'bootstrap/dist/css/bootstrap.css';



ReactDOM.render(
  <div id="outer">
  <Bar />
  <p id="abhi"> Made with ♥ by Abhishek, Check out my Website!</p>
  <Select/>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
