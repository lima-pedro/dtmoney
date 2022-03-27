import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';
import statements from './mock/statements.json';
import { v4 } from 'uuid';

createServer({
  models: {
    transaction: Model
  },

  seeds (server) {
    server.db.loadData({
      transactions: statements
    })
  },

  routes () {
    this.namespace = "api";

    this.get('/transactions', () => {
      // return statements;
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      let payload = JSON.parse(request.requestBody);
      payload = {
        _id: v4(),
        date: new Date(),
        ...payload
      }
      this.schema.create('transaction', payload)
      // statements.push(payload)

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
