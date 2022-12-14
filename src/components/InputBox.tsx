import { UseFormRegister } from "react-hook-form";
import styled from "styled-components";
import { Dollar, Person } from "svg";

type PropsType = {
  label: string;
  text: string;
  placeholder: string;
  id: string;
  error: string;
  type: string;
  icon: string;
  register: UseFormRegister<any>;
  onChange?: () => void;
  defaultValue?: string;
};

const InputBox: React.FC<PropsType> = (props) => {
  return (
    <Wrapper>
      <Info>
        <Label htmlFor={props.id}>{props.text}</Label>
        <Error>{props.error}</Error>
      </Info>
      <Input
        type={props.type}
        error={Boolean(props.error)}
        placeholder={props.placeholder}
        id={props.id}
        {...props.register(props.label, {
          valueAsNumber: true,
          onChange: props.onChange,
        })}
        defaultValue={props.defaultValue || ""}
      />
      {props.icon === "dollar" && <Dollar />}
      {props.icon === "person" && <Person />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Label = styled.label`
  color: #5e7a7d;
  font-size: 16px;
  line-height: 24px;
  justify-self: flex-start;
  text-transform: capitalize;
`;

const Error = styled.p`
  color: #e17457;
  font-size: 16px;
  line-height: 24px;
`;

type InputProps = {
  error: boolean;
};

const Input = styled.input(
  (props: InputProps) => `
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  width: 100%;
  height: 48px;
  background-color: #f3f9fa;
  border-radius: 5px;
  text-align: right;
  font-size: 24px;
  line-height: 35px;
  border: none;
  margin-top: 6px;
  border: ${props.error ? "1px solid #E17052" : "none"};
  padding-right: 5px;
  padding-left: 50px;
  &:focus {
    border: 2px solid #26c2ae;
  }
`
);

export default InputBox;
