import React, {useContext} from 'react'
import PropTypes from 'prop-types'

import {TabContext} from './TabContext'
import {TabWrapper} from './styled'

const Tab = ({id, children, disabled}) => {
  const {changeTab, activeTabId, config} = useContext(TabContext)
  return (
    <TabWrapper
      style={config}
      disabled={disabled}
      active={activeTabId === id}
      onClick={() => (disabled ? {} : changeTab(id))}
    >
      {children}
    </TabWrapper>
  )
}

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  id      : PropTypes.string.isRequired,
}

Tab.defaultProps = {
  disabled: false,
}

Tab.displayName = 'Tabs.Tab'

export default Tab
