import styled from 'styled-components'

import theme from '../../constants/theme'

const plainProperty = `
  background: ${theme.color.white};
  border: 1px solid ${theme.color.primary};
  color: ${theme.color.primary};
`

const secondaryProperty = `
  color: ${theme.color.primary};
  background: #fff;
`

export default styled.button`
  background: ${theme.color.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  cursor: pointer;
  font-size: 14px;
  border: none;
  font-weight: 600;
  :focus {
    outline: none;
  }
  :disabled {
    opacity: 0.7;
    cursor: no-drop;
  }
  color: ${theme.color.white};
  width: ${props => (props.width ? `${props.width}px` : 'auto')};
  height: ${props => `${props.height || 35}px`};
  ${props => props.plain && plainProperty}
  ${props => props.secondary && secondaryProperty}
`
