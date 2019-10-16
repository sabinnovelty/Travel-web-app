import React from 'react'
import PropTypes from 'prop-types'

import { Error } from '../../../commons/Forms/InputField/styled'
import { SwitchComponent, Label, TrackToggle, Toggle } from './styled'

const Switch = ({
  leftLabel,
  rightLabel,
  className,
  checked,
  input,
  meta,
  css,
  disabled,
}) => {
  return (
    <SwitchComponent className={className}>
      {leftLabel && (
        <Label
          css={css}
          onClick={() => !disabled && input.onChange(!input.value)}
          checked={input.value}
          className="left-label"
        >
          {leftLabel}
        </Label>
      )}
      <TrackToggle
        {...input}
        onClick={() => !disabled && input.onChange(!input.value)}
        checked={input.value}
      >
        <Toggle checked={input.value} />
      </TrackToggle>
      {rightLabel && (
        <Label
          onClick={() => !disabled && input.onChange(!input.value)}
          checked={input.value}
          className="right-label"
        >
          {rightLabel}
        </Label>
      )}
      {meta !== undefined && meta.touched && !!meta.error && (
        <Error>{meta.error}</Error>
      )}
    </SwitchComponent>
  )
}

Switch.propTypes = {
  checked  : PropTypes.bool,
  className: PropTypes.string,
  css      : PropTypes.string,
  disabled : PropTypes.bool,
  input    : PropTypes.object,
  leftLabel: PropTypes.string,
  meta     : PropTypes.shape({
    touched: PropTypes.bool,
    error  : PropTypes.string,
  }),
  rightLabel: PropTypes.string,
}

Switch.defaultProps = {
  checked   : false,
  leftLabel : '',
  rightLabel: '',
  css       : '',
}

export default Switch
