import React, { useState } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types'

import theme from '../../constants/theme'
import dropdown from '../../assets/icons/dropdown.svg'

const selectStyles = (width, controlStyles) => ({
  control: styles => ({
    ...styles,
    margin    : 8,
    border    : 'none',
    boxShadow : 'none',
    cursor    : 'pointer',
    background: 'transparent',
    ...controlStyles
  }),
  indicatorSeparator: () => ({ width: 0 }),
  valueContainer    : () => ({ padding: 0 }),
  menu              : styles => ({
    ...styles,
    boxShadow: `0 0 10px 0 ${theme.color.shadow.primary}`,
    width    : width || 120,
    marginTop: 0,
    zIndex   : 120,
    right    : 0
  }),
  option: (styles, { isFocused }) => ({
    ...styles,
    background: theme.color.white,
    fontWeight: 400,
    fontSize  : 16,
    color     : theme.color.text.primary,
    cursor    : 'pointer',
    '&:hover' : {
      background: theme.color.background.hovered
    },

  })
});

const PopoutDropdown = ({ options, target, width, controlStyles, onChange, selectedValue }) => {
  const [value, setValue] = useState({})

  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  const defaultTarget = () => <div
    role="button"
    tabIndex={0}
    onClick={e => {
      e.stopPropagation();
    }}><img
      src={dropdown}
      alt="dropdown"
    />
  </div>

  const onSelectChange = val => {
    if (val.onClick) {
      val.onClick()
    }
    setValue(val)
  };
  return (
    <div onClick={e => e.stopPropagation()}>
      <Select
        backspaceRemovesValue={false}
        components={{ DropdownIndicator: target || defaultTarget }}
        controlShouldRenderValue={false}
        hideSelectedOptions={false}
        isClearable={false}
        isSearchable={false}
        autoFocus={false}
        onChange={onChange || onSelectChange}
        options={options.filter(option => !option.hide)}
        placeholder=""
        styles={selectStyles(width, controlStyles)}
        tabSelectsValue={false}
        value={selectedValue || value}
        className="select-dropdown"
      />
    </div>
  );
}

PopoutDropdown.propTypes = {
  controlStyles: PropTypes.object,
  onChange     : PropTypes.func,
  options      : PropTypes.array,
  selectedValue: PropTypes.object,
  target       : PropTypes.func,
  width        : PropTypes.number
}

export default PopoutDropdown
