import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import theme from '../../../constants/theme'
import CheckIcon from '../../../assets/icons/check-green.svg'

export const CheckboxLabel = styled.div`
  & > label {
    font-size: 12px;
    color: ${theme.color.text.information};
    line-height: 30px;
    position: relative;
    padding-left: 20px;
    height: 30px;
    display: flex;
    align-items: center;
    &::before {
      content: '';
      display: inline-block;
      background: ${theme.color.white};
      border: 1px solid ${theme.color.panel.darkGrey};
      box-sizing: border-box;
      border-radius: 4px;
      width: 15px;
      height: 15px;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  }
  & > input[type='checkbox'] {
    display: none;
    &:checked + label {
      &::before {
        border-color: ${theme.color.primary};
        background: url(${CheckIcon}) no-repeat 1px 0px ${theme.color.white};
        border: 1px solid ${theme.color.primaryLight};
        box-sizing: border-box;
        border-radius: 4px;
        background-size: 11px auto;
      }
    }
  }
  ${props => props.css && props.css}
`

const Checkbox = ({ input, label, meta, checkboxStyle }) => {
  return (
    <CheckboxLabel css={checkboxStyle}>
      <input id={input.name} type="checkbox" {...input} checked={input.value} />
      {/* eslint-disable-next-line jsx-a11y/label-has-for */}
      <label htmlFor={input.name}>{label}</label>
      {meta !== undefined && meta.error && <span>{meta.error}</span>}
    </CheckboxLabel>
  )
}

Checkbox.propTypes = {
  checkboxStyle: PropTypes.string,
  input        : PropTypes.object.isRequired,
  label        : PropTypes.string.isRequired,
  meta         : PropTypes.object,
}

export default Checkbox
