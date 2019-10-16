import styled from 'styled-components'
import theme from '../../../constants/theme'

export default styled.div `
  width: 100%;
  color: ${theme.color.text.primary};
  padding-right: 10px;
  padding-left: 10px;
  margin-right: auto;
  margin-left: auto;
  ${props => !props.fluid && `
    @media (min-width: 576px) {
    max-width: 564px;
    }
    @media (min-width: 768px) {
      max-width: 744px;
    }
    @media (min-width: 992px) {
      max-width: 984px;;
    }
    @media (min-width: 1200px) {
      max-width: 1164px;
    }
  `}
`