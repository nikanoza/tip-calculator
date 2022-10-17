import { Card, InputBox, Percents, Results } from "components";
import GlobalStyles from "globalStyles";
import styled from "styled-components";
import { Title } from "svg";
import useCalculator from "useCalculator";

function App() {
  const {
    register,
    billError,
    peopleError,
    percent,
    percentError,
    setValue,
    trigger,
    isDirty,
    reset,
    tipAmount,
    setTipAmount,
    totalAmount,
    setTotalAmount,
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
            error={billError}
          />
          <Percents
            label="percent"
            error={percentError}
            register={register}
            trigger={trigger}
            onChange={setValue}
            percent={percent}
          />
          <InputBox
            label="people"
            text="Number of People"
            placeholder="0"
            id="people-input"
            register={register}
            type="number"
            error={peopleError}
          />
          <Results formIsDirty={isDirty} resetFunc={reset} tipAmount={tipAmount} setTipAmount={setTipAmount}
            totalAmount={totalAmount}
          setTotalAmount={setTotalAmount}/>
        </form>
      </Card>
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #c5e4e7;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
`;

export default App;
