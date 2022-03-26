import { TransactionsContext } from '../../context/TransactionsContext';
import { useContext, useEffect, useState } from 'react';
import { Container, CardSummary, CardHeader, CardValue } from "./styles";
import incomeSvg from "../../assets/income.svg";
import outcomeSvg from "../../assets/outcome.svg";
import totalSvg from "../../assets/total.svg";

interface Transaction {
  _id: String,
  description: String,
  category: String,
  price: Number,
  type: String,
  date: Date
}
interface Summary {
  entradas: Number,
  saidas: Number,
  total: Number
}

export function Summary() {
  const { transactions } = useContext(TransactionsContext);
  const [summary, setSummary] = useState<Summary>({} as Summary);

  useEffect(() => {
    const summary = transactions.reduce((acc: Number, transaction: Transaction) => {
      // if (transaction.type === 'deposit') {
      //   return acc + transaction.price;
      // }

      // if (transaction.type === 'withdraw') {
      //   return 
      // }

    }, {
      entradas: 0,
      saidas: 0,
      total: 0
    })
  }, [transactions])

  return (
    <Container>
      <CardSummary>
        <CardHeader>
          <p>Entradas</p>
          <img src={incomeSvg} alt="Entradas" />
        </CardHeader>
        <CardValue>R$ 1.000,00</CardValue>
      </CardSummary>

      <CardSummary>
        <CardHeader>
          <p>Saídas</p>
          <img src={outcomeSvg} alt="Saídas" />
        </CardHeader>
        <CardValue>- R$ 500,00</CardValue>
      </CardSummary>

      <CardSummary className="highligth-color">
        <CardHeader>
          <p>Total</p>
          <img src={totalSvg} alt="Total" />
        </CardHeader>
        <CardValue>R$ 500,00</CardValue>
      </CardSummary>
    </Container>
  );
}
