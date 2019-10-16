import styled, { css, keyframes } from 'styled-components'

import Icon from '../../commons/Icons'
import theme from '../../constants/theme'

function styleBackgroundColor({ color, primary, secondary }) {
  if (color) {
    return color
  }
  if (secondary) {
    return theme.color.white
  }
  if (primary) {
    return theme.color.primary
  }
}

const plainProperty = `
  background: ${theme.color.white};
  border: 1px solid ${theme.color.primary};
  color: ${theme.color.primary};
`

export const Wrapper = styled.div`
    > :not(:first-child) {
      margin-left: 10px;
    }
    ${props => props.css && css(...props.css)};
  `,
  PrimaryButton = styled.button``,
  SecondaryButton = styled.button``, // this is still left just not to hamper the test done by kumar
  ContentButton = styled.button`
    color: ${props => theme.color[props.secondary ? 'primary' : 'white']};
    font-size: 1em;
    text-decoration: ${props => (props.secondary ? 'under-line' : 'none')};
    padding: ${props => (props.padding ? props.padding : '10px 15px')};
    border: transparent;
    border-radius: 4px;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    outline: none;
    ${({ disabled }) => disabled && 'opacity: 0.6'};
    background: ${props => styleBackgroundColor(props)};
    ${props => props.plain && plainProperty};
    ${props => props.css && css(...props.css)};
  `,
  IconButton = styled(ContentButton)`
    position: relative;
  `,
  StyledIcon = styled(Icon)`
    position: absolute;
    ${({ position }) => (position === 'right' ? 'right: 8px' : 'left: 8px')};
    ${({ iconCss }) => iconCss && css(...iconCss)};
  `,
  LoadingButton = styled(ContentButton)`
    position: relative;
  `,
  LoadingIcon = styled.span`
    position: absolute;
    line-height: 0;
    top: 50%;
    transform: translateY(-50%);
  `,
  loadingAnimation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`,
  AnimatedIcon = styled(Icon)`
    animation: ${loadingAnimation} 500ms linear infinite;
    margin-left: -19px;
  `
