import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  max-width: 640px;
  margin-top: 40px;
  padding: 32px;
  background-color: #ffffff;
  box-shadow: 0px 32px 43px rgba(79, 166, 175, 0.200735);
  border-radius: 25px 25px 0px 0px;
  @media (min-width: 1024px){
    max-width: 920px;
    display: flex;
    column-gap: 48px;
    border-radius: 25px;
  }
`;

export default Card;
