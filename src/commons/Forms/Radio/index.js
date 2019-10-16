import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import theme from '../../../constants/theme'

const RadioLabel = styled.div``,
  Label = styled.label`
    display: flex;
    position: relative;
    cursor: pointer;
    line-height: 20px;
    font-size: 14px;
  `,
  Circle = styled.span`
    margin-top: 4px;
    position: relative;
    display: block;
    margin-right: 10px;
    width: 16px;
    height: 16px;
    border: 1px solid ${theme.color.border.primary};
    border-radius: 100%;
    -webkit-tap-highlight-color: transparent;
    :after {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: 10px;
      height: 10px;
      border-radius: 100%;
      background: ${theme.color.primary};
      transform: scale(0);
      transition: all 0.2s ease;
      opacity: 0.08;
      pointer-events: none;
    }
  `,
  RadioInput = styled.input`
    display: none;
    &:checked + ${Circle} {
      border-color: ${theme.color.primary};
      :after {
        transform: scale(1);
        transition: all 0.2s cubic-bezier(0.35, 0.9, 0.4, 0.9);
        opacity: 1;
      }
    }
  `

const Radio = ({ input, label, meta, onClick, disabled }) => {
  const hasError = meta && meta.touched && meta.error
  return (
    <RadioLabel>
      <Label htmlFor={input.id}>
        <RadioInput
          id={input.id}
          disabled={disabled}
          type="radio"
          {...input}
          className="hidden"
          onClick={onClick}
        />
        <Circle />
        {label && <StyledSpan>{label}</StyledSpan>}
        {!!hasError && <Error>{hasError}</Error>}
      </Label>
    </RadioLabel>
  )
}

Radio.propTypes = {
  disabled: PropTypes.bool,
  input   : PropTypes.object.isRequired,
  label   : PropTypes.string.isRequired,
  meta    : PropTypes.object,
  onClick : PropTypes.func,
}

const Error = styled.span`
  color: red;
  font-size: 12px;
  margin: 10px 0 0 10px;
`,
  StyledSpan = styled.span`
  flex: 1;
  color: ${theme.color.text.primaryLight};
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`

export default Radio
