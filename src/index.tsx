import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer } from 'miragejs';
import statements from './mock/statements.json';
import { v4 } from 'uuid';

createServer({
  routes () {
    this.namespace = "api";

    this.get('/transactions', () => {
      return statements;
    })

    this.post('/transactions', (schema, request) => {
      let payload = JSON.parse(request.requestBody);
      payload = {
        _id: v4(),
        date: new Date(),
        ...payload
      }
      statements.push(payload)

      return payload;
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
