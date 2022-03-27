import { Container } from "./styles";
import { numberFormat } from '../../utils/numberFormat';
import { dateFormat } from '../../utils/dateFormat';
import { useContext } from 'react';
// import { TransactionsContext } from '../../context/TransactionsContext';
import { useTransactions } from '../../hooks/useTransactions';

interface Transaction {
  _id: string,
  description: string,
  category: string,
  type: string,
  price: number,
  date: Date
}

export function TransactionsTable() {
  const { transactions } = useTransactions();

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
          {transactions.map((transaction: Transaction) => (
            <tr key={transaction._id}>
              <td>{transaction.description}</td>
              <td className={transaction.type}>
                {transaction.type === 'withdraw' && ' - '}
                {numberFormat(transaction.price)}
              </td>
              <td>{transaction.category}</td>
              <td>{dateFormat(new Date(transaction.date))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
