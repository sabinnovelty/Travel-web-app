import React, {useState, createContext} from 'react'
import PropTypes from 'prop-types'

import theme from '../../constants/theme'

// eslint-disable-next-line import/no-mutable-exports
let TabContext
// eslint-disable-next-line no-multi-assign
const {Provider, Consumer} = (TabContext = createContext({}))

const TabProvider = ({children, activeTab, ...props}) => {
  const [activeTabId, setActiveTabId] = useState(activeTab)

  const changeTab = newTabId => {
    setActiveTabId(newTabId)
  }

  return (
    <Provider
      value={{
        activeTabId,
        changeTab,
        ...props,
      }}
    >
      {children}
    </Provider>
  )
}

TabProvider.propTypes = {
  activeTab: PropTypes.string,
  children : PropTypes.node.isRequired,
  config   : PropTypes.shape({
    borderline     : PropTypes.bool,
    borderColor    : PropTypes.string,
    activeTextColor: PropTypes.string,
    textColor      : PropTypes.string,
    css            : PropTypes.string,
  }),
}

TabProvider.defaultProps = {
  activeTab: '',
  config   : {
    borderline     : true,
    borderColor    : theme.color.primary,
    activeTextColor: theme.color.primary,
    textColor      : theme.color.primary,
    css            : '',
  },
}

export default TabProvider
export {Consumer as TabConsumer, TabContext}
