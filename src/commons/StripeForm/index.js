import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { get } from 'lodash'
import { Field } from 'redux-form'
import { CardNumberElement, CardExpiryElement, CardCVCElement } from 'react-stripe-elements'

import theme from '../../constants/theme'
import { TextField } from '../../commons/Forms/InputField'

import visa from '../../assets/icons/cards/visa.png'
import masterCard from '../../assets/icons/cards/master.png'
import americanExpress from '../../assets/icons/cards/american.png'

const StripeForm = ({ changeErrorStatus }) => {
  const [cardNumber, changeCardNumber, onCardNumberBlur] = useFieldHandler('Card Number'),
    [cardExpiry, changeCardExpiry, onExpiryBlur] = useFieldHandler('Card Expiry'),
    [cardCVC, changeCardCVC, onCVCBlur] = useFieldHandler('Card CVC');

  // useEffect(() => {
  //   changeErrorStatus(cardNumber.error || cardExpiry.error || cardCVC.error)
  // }, [cardNumber, cardExpiry, cardCVC, changeErrorStatus])

  return (
    <div>
      <Row>
        <Field name="fullName" component={TextField} label="Full Name" />
      </Row>
      <Row>
        <Field name="email" type="email" component={TextField} label="Email" />
      </Row>
      <Row>
        <Label>Card Information *</Label>
        <CardNumberWrapper>
          <StyledCardNumberElement
            onBlur={onCardNumberBlur}
            onChange={changeCardNumber} />
          <CardImages>
            <img src={visa} alt="" />
            <img src={masterCard} alt="" />
            <img src={americanExpress} alt="" />
          </CardImages>
          {cardNumber.errorMessage && <Error>{cardNumber.errorMessage}</Error>}
        </CardNumberWrapper>
      </Row>
      <Row>
        <CardInfo>
          <div style={{ flex: 1 }}>
            <Label>Card Expiry *</Label>
            <StyledCardExpiryElement
              onBlur={onExpiryBlur}
              onChange={changeCardExpiry} />
            <Error>{cardExpiry.errorMessage}</Error>
          </div>
          <div style={{ flex: 1 }}>
            <Label>Card CVC *</Label>
            <StyledCVCElement
              onBlur={onCVCBlur}
              onChange={changeCardCVC}
            />
            <Error>{cardCVC.errorMessage}</Error>
          </div>
        </CardInfo>
      </Row>
    </div>
  )
}

const useFieldHandler = label => {
  const [field, changeField] = useState({ hasValue: false, error: true, errorMessage: '' })

  const onBlur = () => {
    if (!field.hasValue) {
      changeField({
        ...field,
        error       : true,
        errorMessage: `${label} is required.`
      })
    }
  }

  const onChange = element => {
    const errorMessage = get(element, 'error.message') || ''

    changeField({
      ...field,
      hasValue: !element.empty,
      error   : !!errorMessage,
      errorMessage
    })
  }

  return [field, onChange, onBlur]
};

const Row = styled.div `
    padding-bottom: 15px;
  `,
  CustomStyle = `
    height: 40px;
    border: 1px solid ${theme.color.border.primary};
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 5px;
    &>div:first-of-type {
      flex: 1;
    }
`,
  CardNumberWrapper = styled.div `
    position: relative;
  `,
  CardImages = styled.div `
    position: absolute;
    right: 5px;
    top: 10px;
    display: flex;
    img {
      height: 20px;
      margin-right: 5px;
    }
  `,
  Info = `
    ${CustomStyle}
    flex: 1;
    margin-right: 5px;
    :last-child {
      margin-right: 0;
    }
  `,
  StyledCardNumberElement = styled(CardNumberElement) `${CustomStyle}`,
  StyledCardExpiryElement = styled(CardExpiryElement) `${Info}`,
  StyledCVCElement = styled(CardCVCElement) `${Info}`,
  CardInfo = styled.div `
    display: flex;
    margin: 10px 0 0;
  `,
  Label = styled.div `
    margin-bottom: 10px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    opacity: 0.7;
  `,
  Error = styled.div `
    color: ${theme.color.text.error};
    padding: 5px;
    font-size: 14px;
  `

StripeForm.propTypes = {
  changeErrorStatus: PropTypes.func
};

export default StripeForm
