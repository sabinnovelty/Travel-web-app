import React from 'react'
import styled from 'styled-components'
import {Elements} from 'react-stripe-elements'
import {reduxForm} from 'redux-form'

import Container from '../../../../commons/Style/Container'
import StripeForm from '../../../../commons/StripeForm'
import theme from '../../../../constants/theme'
import OrderSummary from './OrderSummary'

const Payment = () => {
  const [hasError, changeStripeErrorStatus] = React.useState(true)
  return (
    <>
      <Container>
        <Wrapper>
          <LeftSection>
            <Elements>
              <StripeForm
                changeErrorStatus={changeStripeErrorStatus}
                hasError={hasError}
              />
            </Elements>
          </LeftSection>
          <Section>
            <InnerSection>
              <OrderSummary />
            </InnerSection>
          </Section>
        </Wrapper>
      </Container>
    </>
  )
}

export default reduxForm({
  form: 'payment',
})(Payment)

const Wrapper = styled.div`
    display: flex;
    min-height: Calc(100vh - 77px);
    padding-top: 40px;
    @media (max-width: 768px) {
      min-height: auto;
    }
  `,
  Section = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 15px;
    @media (max-width: 768px) {
      :last-child {
        display: none;
      }
    }
  `,
  LeftSection = styled(Section)`
    border-right: 1px solid ${theme.color.border.fade};
    @media (max-width: 768px) {
      border-right: none;
    }
  `,
  InnerSection = styled.div`
    max-width: 440px;
    width: 100%;
  `
