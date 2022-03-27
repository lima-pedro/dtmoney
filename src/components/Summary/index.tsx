// import { TransactionsContext } from '../../context/TransactionsContext';
import { useTransactions } from '../../hooks/useTransactions';
// import { useContext } from 'react';
import { Container, CardSummary, CardHeader, CardValue } from "./styles";
import { numberFormat } from '../../utils/numberFormat';
import incomeSvg from "../../assets/income.svg";
import outcomeSvg from "../../assets/outcome.svg";
import totalSvg from "../../assets/total.svg";

// interface Transaction {
//   _id: string,
//   description: string,
//   category: string,
//   price: number,
//   type: string,
//   date: Date
// }
// interface SummaryProps {
//   entradas: Number,
//   saidas: Number,
//   total: Number
// }

export function Summary() {
  const { transactions } = useTransactions();
  // const [summary, setSummary] = useState<Summary>({} as Summary);

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.entradas += transaction.price
      acc.total += transaction.price
    } else {
      acc.saidas -= transaction.price
      acc.total -= transaction.price
    }

    return acc;
  }, {
    entradas: 0,
    saidas: 0,
    total: 0
  })

  return (
    <Container>
      <CardSummary>
        <CardHeader>
          <p>Entradas</p>
          <img src={incomeSvg} alt="Entradas" />
        </CardHeader>
        <CardValue>{numberFormat(summary.entradas)}</CardValue>
      </CardSummary>

      <CardSummary>
        <CardHeader>
          <p>Saídas</p>
          <img src={outcomeSvg} alt="Saídas" />
        </CardHeader>
        <CardValue>{numberFormat(summary.saidas)}</CardValue>
      </CardSummary>

      <CardSummary className="highligth-color">
        <CardHeader>
          <p>Total</p>
          <img src={totalSvg} alt="Total" />
        </CardHeader>
        <CardValue>{numberFormat(summary.total)}</CardValue>
      </CardSummary>
    </Container>
  );
}
