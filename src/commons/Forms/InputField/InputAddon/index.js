import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import theme from '../../../../constants/theme'
import {
  InputWrapper,
  InputWithIcon,
  InputGroupAppend,
  Label,
  TextInput,
  Error,
} from '../styled'

function styleBorderRadius(append, prepend) {
  if (append && prepend) {
    return '0'
  }
  if (prepend) {
    return '0px 6px 6px 0px'
  }
  if (append) {
    return '6px 0 0 6px'
  }
}

const TextInputWapper = styled(InputWithIcon)`
  border: ${props => props.isActive ? theme.color.primary : theme.color.border.primary }solid 1px;
  border-radius: 4px;
`

const InputAddonField = styled(TextInput)`
  border: none;
  overflow: hidden;
  flex: 1;
  border-radius: ${props => styleBorderRadius(props.append, props.prepend)};
`,
  InnerAppend = styled.div`
  padding: 10px;
`

const InputAddons = ({input, label, meta, prepend, append, innerAppend, ...rest}) => {
  return (
    <InputWrapper>
      <Label isActive={meta !== undefined && meta.active}>{label}</Label>
      <TextInputWapper isActive={meta !== undefined && meta.active}>
        {prepend && <InputGroupAppend>{prepend}</InputGroupAppend>}
        <InputAddonField
          isActive={meta !== undefined && meta.active}
          hasError={meta !== undefined && meta.touched && !!meta.error}
          prepend={!!prepend}
          append={!!append}
          {...input}
          {...rest}
        />
        {append && <InputGroupAppend>{append}</InputGroupAppend>}
        {innerAppend && <InnerAppend>{innerAppend}</InnerAppend>}
      </TextInputWapper>
      {meta !== undefined && meta.touched && !!meta.error && (
        <Error>{meta.error}</Error>
      )}
    </InputWrapper>
  )
}

// TODO will fix in another MR
// const requiredPropsCheck = props => {
//   if (!props.append && !props.prepend) {
//     const error = new Error(
//       'Either append or prepend props is required as a node',
//     )
//     return error
//   }
// }

InputAddons.propTypes = {
  append     : PropTypes.node,
  innerAppend: PropTypes.node,
  input      : PropTypes.object,
  label      : PropTypes.node,
  meta       : PropTypes.shape({
    touched: PropTypes.bool,
    error  : PropTypes.string,
  }),
  prepend: PropTypes.node,
}

export default InputAddons
