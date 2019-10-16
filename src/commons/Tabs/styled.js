import styled, {css} from 'styled-components'

import theme from '../../constants/theme'

export const TabsWrapper = styled.div`
    display: flex;
    flex-direction: column;
  `,
  ListWrapper = styled.div`
    display: flex;
    cursor: pointer;
    ${({style}) => style.css && css(...style.css)}
  `,
  PanelWrapper = styled.div`
    ${({style}) => style.css && css(...style.css)}
  `,
  PanelsWrapper = styled.div`
    display: flex;
    padding: 10px 4px;
  `

export const TabWrapper = styled.div`
  position: relative;
  padding: 5px 10px;
  cursor: ${({disabled}) => disabled && 'not-allowed'};
  opacity: ${({disabled}) => disabled && '0.6'};
  :after {
    content: '';
    display: block;
    height: 4px;
    position: absolute;
    bottom: 0px;
    left: 50%;
    width: 0;
    background: ${({style}) =>
    style.borderline && (style.borderColor || theme.color.primary)};
    transition: all 150ms;
  }
  ${({active, style}) =>
    active &&
    `
    color: ${style.activeTextColor || theme.color.primary};
    :after {
      width: 100%;
      left: 0;
    }
  `}
`
