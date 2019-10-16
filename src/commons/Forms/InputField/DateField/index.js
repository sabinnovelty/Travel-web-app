import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'

import theme from '../../../../constants/theme'
import Calendar from '../../../../assets/images/calendar.png'
import { InputWrapper, Label, Error, borderColor } from '../styled'
import 'react-datepicker/dist/react-datepicker.css'

const StyledDatePicker = styled(DatePicker)`
  font-size: 1em;
  color: rgba(110, 110, 110);
  border: ${props => borderColor(props)};
  border-radius: 6px;
  line-height: 18px;
  padding: 12px;
  padding-right: 35px;
  width: 100%;
  background: url(${Calendar}) no-repeat center right 10px transparent;
  background-size: 16px;
  :disabled {
    background-color: ${theme.color.background.fade};
    cursor: not-allowed;
  }
  :focus {
    outline: none;
  }
  ::placeholder {
    margin-left: 10px;
    color: rgb(217, 217, 217);
  }
  :after {
    content: 'X';
    display: block;
  }
  ${({ inputCss }) => inputCss}
`

const DateField = ({
  input: { onChange, value, placeholder, onBlur, onFocus },
  meta,
  label,
  disabled,
  inputCss,
  dateWrapperCss,
  maxDate = new Date(2100, 0, 1),
  minDate = new Date(1850, 0, 1),
  onlyYearnMonths,
  ...props
}) => {
  return (
    <InputWrapper css={dateWrapperCss}>
      {label && (
        <Label isActive={meta !== undefined && meta.active}>{label}</Label>
      )}
      <StyledDatePicker
        onChange={startDateValue => {
          let changedValue = startDateValue

          // Remove this after bug is solved in new release of react-datepicker
          if (maxDate && startDateValue > maxDate) {
            changedValue = maxDate
          }
          if (minDate && startDateValue < minDate) {
            changedValue = minDate
          }
          if (!startDateValue) {
            changedValue = startDateValue
          }
          onChange(changedValue)
        }}
        maxDate={maxDate}
        minDate={minDate}
        onBlur={e => onBlur()}
        dateForm="MM/DD/YYYY"
        selectsStart
        selected={value && new Date(value)}
        startDate={value && new Date(value)}
        monthsShown={1}
        showMonthDropdown
        showYearDropdown
        showMonthYearPicker={onlyYearnMonths}
        placeholder={placeholder || 'Date'}
        disabled={disabled}
        isActive={meta !== undefined && meta.active}
        hasError={meta !== undefined && meta.touched && !!meta.error}
        inputCss={inputCss}
        onFocus={onFocus}
        {...props}
      />
      {meta !== undefined && meta.touched && !!meta.error && (
        <Error>{meta.error}</Error>
      )}
    </InputWrapper>
  )
}

DateField.propTypes = {
  dateWrapperCss: PropTypes.string,
  disabled      : PropTypes.bool,
  input         : PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value   : PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
      .isRequired,
    placeholder: PropTypes.string,
  }).isRequired,
  inputCss: PropTypes.string,
  label   : PropTypes.node,
  maxDate : PropTypes.instanceOf(Date),
  meta    : PropTypes.shape({
    touched: PropTypes.bool,
    error  : PropTypes.string,
  }),
  minDate        : PropTypes.instanceOf(Date),
  onlyYearnMonths: PropTypes.bool,
}

DateField.displayName = 'DateField'

export default DateField
