import Card from "components/Card";
import InputBox from "components/InputBox";
import GlobalStyles from "globalStyles";
import useCalculator from "hooks/useCalculator";
import styled from "styled-components";
import { Title } from "svg";

function App() {
  const { register, billValidations, billError } = useCalculator();

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
