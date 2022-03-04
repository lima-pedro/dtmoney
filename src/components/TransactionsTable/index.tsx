import { Container } from "./styles";
import statements from "../../mock/statements.json";
import { numberFormat } from '../../utils/numberFomart';

export function TransactionsTable() {
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
          {statements.map((statement) => (
            <tr>
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
