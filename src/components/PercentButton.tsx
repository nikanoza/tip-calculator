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
    <Button
      backgroundColor={props.active ? "#9FE8DF" : "#00474B"}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </Button>
  );
};

type ButtonProps = {
  backgroundColor: string;
};

const Button = styled.button.attrs((props: ButtonProps) => ({
  backgroundColor: props.backgroundColor,
}))`
  width: 117px;
  height: 48px;
  border-radius: 5px;
`;

export default PercentButton;
