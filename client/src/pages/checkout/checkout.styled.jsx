import styled from 'styled-components';

/* REACT COMPONENTS */
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

export const CheckOutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  @media screen and (max-width: 800px) {
    width: 90vw;
  }
`;

export const CheckOutHeaderContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const CheckOutHeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const TestWarningContainer = styled.div`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 24px;
  color: red;
`;

export const StripeCheckoutButtonStyled = styled(StripeCheckoutButton)`
  margin-left: auto;
  margin-top: 50px;
`;
