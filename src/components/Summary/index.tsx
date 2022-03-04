import { Container, CardSummary, CardHeader, CardValue } from "./styles";
import incomeSvg from "../../assets/income.svg";
import outcomeSvg from "../../assets/outcome.svg";
import totalSvg from "../../assets/total.svg";

export function Summary() {
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
