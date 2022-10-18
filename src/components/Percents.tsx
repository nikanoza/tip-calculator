import {
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
} from "react-hook-form";
import styled from "styled-components";
import PercentButton from "./PercentButton";

type PropsType = {
  label: string;
  error: boolean | undefined;
  percent: number;
  trigger: UseFormTrigger<any>;
  onChange: UseFormSetValue<any>;
  register: UseFormRegister<any>;
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
            onClick={() => {
              props.onChange("percent", button);
              props.trigger("percent");
            }}
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
            valueAsNumber: true,
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
  @media (min-width: 1024px) {
    width: 413px;
  }
`;

const Buttons = styled.div`
  width: 100%;
  margin-top: 16px;
  display: flex;
  justify-content: center;
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
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
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
  @media (min-width: 1024px) {
    width: 118px;
    padding-right: 10px;
  }
`;

export default Percents;
