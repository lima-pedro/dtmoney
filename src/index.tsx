import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer } from 'miragejs';
import statements from './mock/statements.json';

createServer({
  routes () {
    this.namespace = "api";

    this.get('/transactions', () => {
      return statements;
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
