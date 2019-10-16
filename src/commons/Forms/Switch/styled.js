import styled from 'styled-components'

import theme from '../../../constants/theme'

export const SwitchComponent = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    padding: 10px 0;
  `,
  Label = styled.div`
    cursor: pointer;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 16px;
    color: ${theme.color.text.primary};
    opacity: 0.7;
    ${({ css }) => css}
  `,
  TrackToggle = styled.div`
    border-radius: 20px;
    box-sizing: border-box;
    cursor: pointer;
    height: 24px;
    min-height: 24px;
    margin: 0 10px;
    padding: 2px;
    position: relative;
    transition: all 0.5s ease;
    vertical-align: middle;
    width: 42px;
    min-width: 42px;
    z-index: 1;
    background-color: ${props =>
    props.checked ? theme.color.primary : theme.color.text.primaryLight};
  `,
  Toggle = styled.div`
    background-color: ${theme.color.white};
    border-radius: 100%;
    height: 20px;
    left: ${props => (props.checked ? 20 : 2)}px;
    position: absolute;
    transition: all 0.5s ease;
    width: 20px;
    z-index: 3;
  `
