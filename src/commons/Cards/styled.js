import styled from 'styled-components'

import theme from '../../constants/theme'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    box-shadow: 0 0 10px 0 #e8e1e1;
    border-radius: 4px;
    max-width: 100%;
    background: ${theme.color.card.primary};
    ${({css}) => css}
  `,
  CardHeader = styled.div`
    padding: 10px;
    ${({css}) => css}
  `,
  CardContent = styled.div`
    padding: 10px;
    ${({css}) => css}
  `,
  CardFooter = styled.div`
    padding: 10px;
    ${({css}) => css}
  `,
  CloseIcon = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    width: 36px;
    height: 36px;
    cursor: pointer;
    z-index: 1;
  `
