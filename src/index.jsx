import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const version = process.env.NODE_ENV
console.log(`%c${version} BUILD`, 'color: tomato; font-size: 32px')

ReactDOM.render(
  <App />,
  document.getElementById('root')
);