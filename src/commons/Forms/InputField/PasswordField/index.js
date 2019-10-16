import React from 'react'
import PropTypes from 'prop-types'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

import Icon from '../../../../commons/Icons'
import {
  InputWrapper,
  Label,
  TextInput,
  Error,
  InputWithIcon,
  SIcon,
} from '../styled'

const PasswordField = ({
  input,
  label,
  disabled,
  meta: { touched, error, active },
  ...rest
}) => {
  const [show, setShow] = React.useState(false)
  return (
    <InputWrapper>
      <Label isActive={active}>{label}</Label>
      <InputWithIcon>
        <TextInput
          isActive={active}
          hasError={touched && !!error}
          {...input}
          {...rest}
          disabled={disabled}
          type={show ? 'text' : 'password'}
        />
        <SIcon active={show} size={12} onClick={() => setShow(!show)}>
          <Icon icon={show ? faEye : faEyeSlash} />
        </SIcon>
      </InputWithIcon>
      {touched && !!error && <Error>{error}</Error>}
    </InputWrapper>
  )
}

PasswordField.propTypes = {
  disabled: PropTypes.bool,
  input   : PropTypes.object,
  label   : PropTypes.node,
  meta    : PropTypes.shape({
    touched: PropTypes.bool,
    error  : PropTypes.string,
  }),
}

export default PasswordField
