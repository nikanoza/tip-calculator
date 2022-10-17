import { UseFormRegister } from "react-hook-form";
import styled from "styled-components";
import PercentButton from "./PercentButton";

type PropsType = {
  label: string;
  error: boolean | undefined;
  percent: number;
  register: UseFormRegister<any>;
  validation: object;
};

const buttons = [5, 10, 15, 25, 50];

const Percents: React.FC<PropsType> = (props) => {
  return (
    <Main>
      <ButtonsHeader>Select Tip %</ButtonsHeader>
      <Buttons>
        {buttons.map((button) => (
          <PercentButton
            key={button}
            active={props.percent === button}
            onClick={() => {}}
            type="button"
          >
            {button}%
          </PercentButton>
        ))}
        <Input
          type="number"
          style={{ border: props.error ? "1px solid #E17052" : "none" }}
          placeholder="Custom"
          id="percent"
          {...props.register(props.label, {
            ...props.validation,
          })}
        />
      </Buttons>
    </Main>
  );
};

const Main = styled.div`
  width: 100%;
  margin-top: 32px;
  margin-bottom: 32px;
`;

const Buttons = styled.div`
  width: 100%;
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 16px;
`;

const ButtonsHeader = styled.span`
  color: #5e7a7d;
  font-size: 16px;
  line-height: 24px;
`;

const Input = styled.input`
  width: 146px;
  height: 48px;
  background-color: #f3f9fa;
  border-radius: 5px;
  text-align: right;
  font-size: 24px;
  line-height: 35px;
  border: none;
  padding-right: 17px;
  padding-left: 17px;
  &:focus {
    border: 2px solid #26c2ae;
  }
`;

export default Percents;
