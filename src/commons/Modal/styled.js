import styled, { css } from 'styled-components'

import Icon from '../../commons/Icons'
import theme from '../../constants/theme'

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 500;
`

function stylePosition(position) {
  switch (position) {
  case 'top':
    return 'top: 0'
  case 'bottom':
    return 'bottom: 0'
  default:
    return ''
  }
}

export const ModalBox = styled.div`
    position: absolute;
    width: 600px;
    max-width: 100%;
    padding: 10px;
    ${({ position }) => stylePosition(position)}
  `,
  Wrapper = styled.div`
    position: relative;
    background: #fff;
    border-radius: 4px;
  `,
  CloseIcon = styled(Icon)`
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
  `,
  HeaderWrapper = styled.div`
    padding: 15px;
    ${({ border }) =>
    border &&
      `
      border-bottom: solid 1px ${theme.color.border.primary};
    `}
    ${({ headerCss }) => headerCss && css(...headerCss)}
  `,
  ContentWrapper = styled.div`
    padding: 10px 15px;
    ${({ contentCss }) => contentCss && css(...contentCss)}
  `,
  FooterWrapper = styled.div`
    padding: 10px 15px;
    ${({ border }) =>
    border &&
      `
      border-top: solid 1px ${theme.color.border.primary};
    `}
    ${({ footerCss }) => footerCss && css(...footerCss)}
  `
