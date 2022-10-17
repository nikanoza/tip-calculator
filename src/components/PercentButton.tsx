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
      style={{
        backgroundColor: props.active ? "#9FE8DF" : "#00474B",
        color: props.active ? "#00474B" : "#FFFFFF",
      }}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </Button>
  );
};

const Button = styled.button`
  width: 146px;
  border: none;
  height: 48px;
  font-size: 24px;
  line-height: 35px;
  border-radius: 5px;
`;

export default PercentButton;
