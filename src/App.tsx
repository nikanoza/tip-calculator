import Card from "components/Card";
import GlobalStyles from "globalStyles";
import styled from "styled-components";
import { Title } from "svg";

function App() {
  return (
    <Main>
      <GlobalStyles />
      <Title />
      <Card></Card>
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
  column-gap: 40px;
`;

export default App;
