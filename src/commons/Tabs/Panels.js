import React from 'react'
import PropTypes from 'prop-types'

import {PanelsWrapper} from './styled'

const Panels = ({children}) => {
  return <PanelsWrapper>{children}</PanelsWrapper>
}

Panels.propTypes = {
  children: PropTypes.node.isRequired,
}

Panels.displayName = 'Tabs.Panels'

export default Panels
