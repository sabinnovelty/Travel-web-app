import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {faMinus} from '@fortawesome/free-solid-svg-icons'

import theme from '../../../../constants/theme'
import {
  InputWrapper,
  InputWithIcon as TextInputWapper,
   Label,
  TextInput,
  Error,
} from '../styled'

const QuantityField = ({input, label, meta, inputCss, labelCss, ...rest}) => {
  const [quantity, setQuantity] = React.useState(1)
  const handleQuantity = action => {
    if (quantity > 0) {
      if (action === 'increase') {
        setQuantity(quantity + 1)
      } else {
        setQuantity(quantity - 1)
      }
    }
  }
  return (
    <>
      <InputWrapper>
        {label && <Label isActive={meta !== undefined && meta.active} css={labelCss}>
        {label}
      </Label>}
        <TextInputWapper>
          <Augment onClick={() => handleQuantity('increase')}><FontAwesomeIcon icon={faPlus} style={{ color: '#fff' }} /></Augment>
          <TextInput
            css={inputCss}
            disabled
            isActive={meta !== undefined && meta.active}
            hasError={meta !== undefined && meta.touched && !!meta.error}
            {...input}
            {...rest}
        />
        <Augment onClick={() => handleQuantity('decrease')}><FontAwesomeIcon icon={faMinus} style={{ color: '#fff' }} /></Augment>
        </TextInputWapper>
        {meta !== undefined && meta.touched && !!meta.error && (
          <Error className="field-error">{meta.error}</Error>
        )}
      </InputWrapper>
    </>
  )
}

export default QuantityField

const Augment = styled.span`
  background: ${theme.color.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .375rem .75rem;
  cursor: pointer;
`