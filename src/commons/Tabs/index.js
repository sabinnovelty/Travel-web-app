import React from 'react'
import PropTypes from 'prop-types'

import {TabsWrapper} from './styled'
import TabProvider from './TabContext'
import List from './List'
import Tab from './Tab'
import Panels from './Panels'
import Panel from './Panel'

const Tabs = ({children, ...props}) => {
  return (
    <TabProvider {...props}>
      <TabsWrapper>{children}</TabsWrapper>
    </TabProvider>
  )
}

Tabs.List = List
Tabs.Tab = Tab
Tabs.Panels = Panels
Tabs.Panel = Panel

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
}

Tabs.displayName = 'Tabs'

export default Tabs
