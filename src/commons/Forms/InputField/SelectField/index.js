import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import theme from '../../../../constants/theme'
import {
  InputWrapper,
  Label,
  borderColor,
  Error,
  SelectInputWrapper,
} from '../styled'

const maxLength = 50;
const getSelectStyleSetting = (css, isSearchable, hasError, isActive, disabled) => ({
  menu: styles => ({
    ...styles,
    marginTop   : 2,
    borderRadius: 0,
    minWidth    : 100,
    zIndex      : 120
  }),
  control: styles => ({
    ...styles,
    boxShadow   : 'none',
    cursor      : 'pointer',
    background  : 'transparent',
    fontSize    : '1em',
    alignItems  : 'center',
    color       : 'rgba(110, 110, 110)',
    border      : css.border || borderColor({ isActive, hasError }),
    borderRadius: 6,
    height      : css.height || 44,
    padding     : '0 12px',
    '&:focus'   : { outline: 'none' },
    '&:hover'   : { outline: 'none' },
    ...disabled && { background: '#fff', opacity: 0.6 }
  }),
  clearIndicator: styles => ({
    ...styles,
    height    : '100%',
    padding   : 0,
    margin    : 0,
    alignItems: 'center',
  }),
  indicatorSeparator: () => ({ width: 0 }),
  option            : (styles, { isSelected, isFocused }) => ({
    ...styles,
    fontSize       : 13,
    cursor         : 'pointer',
    '&:active'     : { backgroundColor: theme.color.background.hovered },
    // eslint-disable-next-line
    backgroundColor: isSelected
      ? theme.color.background.selected
      : isFocused
        ? theme.color.background.hovered
        : '#fff',
    color: theme.color.text.def,
  }),
  singleValue: () => ({
    fontSize    : css.fontSize || 15,
    color       : css.color || '#1B1D1F',
    textOverflow: 'ellipsis',
    overflow    : 'hidden',
    whiteSpace  : 'nowrap',
    marginRight : 5,
    maxWidth    : 'Calc(100% - 15px)'
  }),
  placeholder: styles => ({
    ...styles,
    paddingLeft: 0,
    color      : isSearchable ? '#939393' : theme.color.text.def,
    fontSize   : 13,
  }),
  input: styles => ({
    ...styles,
    fontSize: 15,
    padding : '0',
  }),
  valueContainer: styles => ({
    ...styles,
    padding: '0',
  }),
})

const DropdownComponent = css => (
  <FontAwesomeIcon
    icon={faCaretDown}
    color={css.dropDownColor ? css.dropDownColor : '#666666'}
  />
)

const InputTextWithSearch = ({
  input,
  options: opts,
  meta,
  isSearchable,
  label,
  onInputChange,
  allowNewOptions,
  labelCss,
  inputCss,
  canDeselectOption,
  css = {},
  disabled,
  ...props
}) => {
  const hasError = meta && meta.touched && meta.error
  const options = canDeselectOption ? [{ id: null, value: '-None-' }, ...opts] : opts
  const value = isSearchable
    ? input.value
    : options.find(o => o.id === input.value)

  return (
    <InputWrapper css={inputCss}>
      {label && <Label css={labelCss} isActive={meta.active}>
        {label}
      </Label>}
      <SelectInputWrapper>
        <Select
          {...props}
          autoSize={false}
          options={options}
          onInputChange={inputValue => {
            const val = inputValue.length <= maxLength ? inputValue : inputValue.substr(0, maxLength)
            if (onInputChange) onInputChange(val)
            return val
          }}
          isSearchable={isSearchable || false}
          {...input}
          value={value || null}
          onChange={option => {
            setTimeout(() => input.onChange(isSearchable ? option : option.id), 200) // Hack to fix mobile issue
          }}
          isClearable={isSearchable || false}
          onBlur={e => {
            e.preventDefault()
            allowNewOptions &&
            e.target.value &&
            input.onChange({ id: null, value: e.target.value })
            input.onBlur()
          }}
          getOptionLabel={option => option.value}
          components={{
            DropdownIndicator: !isSearchable
              ? () => DropdownComponent(css)
              : null,
          }}
          styles={getSelectStyleSetting(css, isSearchable, hasError, false, disabled)}
          isDisabled={disabled}
        />
      </SelectInputWrapper>
      {!!hasError && <Error>{hasError}</Error>}
    </InputWrapper>
  )
}

InputTextWithSearch.propTypes = {
  allowNewOptions  : PropTypes.bool,
  canDeselectOption: PropTypes.bool,
  css              : PropTypes.object,
  disabled         : PropTypes.bool,
  input            : PropTypes.object,
  inputCss         : PropTypes.string,
  isClearable      : PropTypes.bool,
  isSearchable     : PropTypes.bool,
  label            : PropTypes.string,
  labelCss         : PropTypes.string,
  meta             : PropTypes.object,
  onInputChange    : PropTypes.func,
  options          : PropTypes.array,
  placeholder      : PropTypes.string,
}

export default InputTextWithSearch
