import { Container } from "./styles";
import { numberFormat } from '../../utils/numberFomart';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<any>([]);

  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransactions(response.data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((statement: any) => (
            <tr key={statement._id}>
              <td>{statement.description}</td>
              <td className={statement.type}>
                {statement.type === 'withdraw' && ' - '}
                {numberFormat(statement.price)}
              </td>
              <td>{statement.category}</td>
              <td>{statement.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
