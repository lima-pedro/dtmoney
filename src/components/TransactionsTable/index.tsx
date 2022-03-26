import { Container } from "./styles";
import { numberFormat } from '../../utils/numberFomart';
import { useContext } from 'react';
import { TransactionsContext } from '../../context/TransactionsContext';

export function TransactionsTable() {
  const { transactions } = useContext(TransactionsContext);

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
