import React from 'react'
import styled from 'styled-components'

import Card from '../../../commons/Cards'
import Items from './items'
import Search from './Search'
import Navigations from './navigations'

const SearchBox = () => {
  return (
    <>
      <Card>
        <Card.Content>
          <HeaderText>Trekking Guides and Porter-Guides for Nepal</HeaderText>
          <Items />
          <Search />
          <Navigations />
        </Card.Content>
      </Card>
    </>
  )
}

export default SearchBox

const HeaderText = styled.h2`
  font-weight: bold;
`
