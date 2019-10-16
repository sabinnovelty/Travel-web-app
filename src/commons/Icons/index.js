import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Svg = styled.svg`
  display: inline-block;
  fill: ${props => props.color};
  height: ${props => `${props.size}px`};
  width: ${props => `${props.size}px`};
  user-select: none;
`;

const App = ({icon, isSvg, color, children, size, viewBox, ...props}) => {
  return (
    <>
      {isSvg ? <Svg color={color} size={size} viewBox={viewBox} {...props}>
        {children}
      </Svg>:
        <FontAwesomeIcon icon={icon} {...props} />
      }
    </>
  )
}

App.propTypes = {
  children: PropTypes.node,
  color   : PropTypes.string,
  icon    : PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]),
  isSvg  : PropTypes.bool,
  size   : PropTypes.number,
  viewBox: PropTypes.string,
}

App.defaultProps = {
  color  : '#000000',
  size   : 24,
  viewBox: '0 0 24 24',
}

export default App
