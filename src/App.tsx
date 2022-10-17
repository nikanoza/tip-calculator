import { Card, InputBox, Percents } from "components";
import GlobalStyles from "globalStyles";
import { useCalculator } from "hooks";
import styled from "styled-components";
import { Title } from "svg";

function App() {
  const {
    register,
    billValidations,
    billError,
    peopleValidations,
    peopleError,
    percentValidation,
    percent,
    percentError,
  } = useCalculator();

  return (
    <Main>
      <GlobalStyles />
      <Title />
      <Card>
        <form>
          <InputBox
            label="bill"
            text="bill"
            placeholder="0"
            id="bill-input"
            register={register}
            type="number"
            validation={billValidations}
            error={billError}
          />
          <Percents
            label="percent"
            error={percentError}
            register={register}
            validation={percentValidation}
            percent={percent}
          />
          <InputBox
            label="people"
            text="Number of People"
            placeholder="0"
            id="people-input"
            register={register}
            type="number"
            validation={peopleValidations}
            error={peopleError}
          />
        </form>
      </Card>
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  height: 100%;
  background-color: #c5e4e7;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
`;

export default App;
