import { hover } from "@testing-library/user-event/dist/hover";
import { ReactNode } from "react";
import styled from "styled-components";

type PropsType = {
  children: ReactNode;
  active?: boolean;
  onClick: () => void;
  type: "button" | "submit" | "reset" | undefined;
};

const PercentButton: React.FC<PropsType> = (props) => {
  return (
    <Button active={props.active} onClick={props.onClick} type={props.type}>
      {props.children}
    </Button>
  );
};

type ButtonProps = {
  active: boolean | undefined;
};

const Button = styled.button(
  (props: ButtonProps) => `
  width: 146px;
  border: none;
  height: 48px;
  cursor: pointer;
  font-size: 24px;
  line-height: 35px;
  border-radius: 5px;
  background-color: ${props.active ? "#9FE8DF" : "#0D686D"};
  color: ${props.active ? "#00474B" : "#FFFFFF"};
  @media (min-width: 1024px) {
    width: 117px;
  }
`
);

export default PercentButton;
