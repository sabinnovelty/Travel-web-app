import React, {useContext} from 'react'
import PropTypes from 'prop-types'

import {ListWrapper} from './styled'
import {TabContext} from './TabContext'

const List = ({render}) => {
  const context = useContext(TabContext)
  const {config} = context
  return <ListWrapper style={config}>{render(context)}</ListWrapper>
}

List.propTypes = {
  render: PropTypes.func.isRequired,
}

List.displayName = 'Tabs.list'

export default List
