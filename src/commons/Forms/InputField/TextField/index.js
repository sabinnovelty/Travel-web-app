import React from 'react'
import PropTypes from 'prop-types'

import { MAX_VALUE } from '../../../../constants/fieldConstants'
import {
  InputWrapper,
  InputWithIcon as TextInputWapper,
  Label,
  TextInput,
  Error,
  Prepend
} from '../styled'

const TextField = ({
  input,
  label,
  meta,
  css,
  labelCss,
  disabled,
  inputCss,
  prepend,
  ...rest
}) => {
  return (
    <InputWrapper css={css}>
      {label && <Label isActive={meta !== undefined && meta.active} css={labelCss}>
        {label}
      </Label>}
      <TextInputWapper>
        {prepend && <Prepend>{prepend}</Prepend>}
        <TextInput
          prepend={prepend}
          css={inputCss}
          maxLength={prepend === '$' ? MAX_VALUE.currencyField : MAX_VALUE.normalFields}
          disabled={disabled}
          isActive={meta !== undefined && meta.active}
          hasError={meta !== undefined && meta.touched && !!meta.error}
          {...input}
          {...rest}
        />
      </TextInputWapper>
      {meta !== undefined && meta.touched && !!meta.error && (
        <Error className="field-error">{meta.error}</Error>
      )}
    </InputWrapper>
  )
}

TextField.propTypes = {
  css     : PropTypes.string,
  disabled: PropTypes.bool,
  input   : PropTypes.object,
  inputCss: PropTypes.string,
  label   : PropTypes.node,
  labelCss: PropTypes.string,
  meta    : PropTypes.shape({
    touched: PropTypes.bool,
    error  : PropTypes.string,
  }),
  prepend: PropTypes.string
}

TextField.defaultProps = {
  css     : '',
  inputCss: '',
  labelCss: '',
}

export default TextField
