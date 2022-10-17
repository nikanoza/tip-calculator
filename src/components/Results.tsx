import { UseFormReset } from "react-hook-form";
import styled from "styled-components";

const Results: React.FC<{
  formIsDirty: boolean;
  resetFunc: UseFormReset<any>;
  tipAmount: number;
  setTipAmount: (num: number) => void;
  totalAmount: number;
  setTotalAmount: (num: number) => void;
}> = (props) => {
  return (
    <Wrapper>
      <InfoBox>
        <div>
          <InfoSpan>Tip Amount</InfoSpan>
          <TypeDiv>/ person</TypeDiv>
        </div>
        <TipAmount>${props.tipAmount.toFixed(2)}</TipAmount>
      </InfoBox>
      <InfoBox>
        <div>
          <InfoSpan>Total</InfoSpan>
          <TypeDiv>/ person</TypeDiv>
        </div>
        <TipAmount>${props.totalAmount.toFixed(2)}</TipAmount>
      </InfoBox>
      <Button
        type="button"
        style={{
          backgroundColor: props.formIsDirty ? "#26C2AE" : "#0D686D",
          opacity: props.formIsDirty ? "1" : "0.35",
        }}
        onClick={() => {
          props.resetFunc();
          props.setTipAmount(0);
          props.setTotalAmount(0);
        }}
      >
        reset
      </Button>
    </Wrapper>
  );
};

export default Results;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 32px;
  padding: 37px 22px 24px 24px;
  background-color: #00474b;
  border-radius: 15px;
`;

const InfoBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
const InfoSpan = styled.span`
  color: #ffffff;
  font-size: 16px;
  line-height: 24px;
`;
const TypeDiv = styled.div`
  color: #7f9d9f;
  font-size: 13px;
  line-height: 20px;
`;

const TipAmount = styled.div`
  color: #26c2ae;
  font-size: 32px;
  line-height: 47px;
`;

const Button = styled.button`
  width: 100%;
  height: 46px;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 20px;
  line-height: 30px;
  border: none;
  &:hover {
    background-color: #9fe8df;
  }
`;
