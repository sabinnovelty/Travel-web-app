import React from 'react'
import styled from 'styled-components'

import Guides from './Guides'

const FeaturedGuides = () => {
  return (
    <>
      <Wrapper>
        <Guides />
      </Wrapper>
    </>
  )
}

export default FeaturedGuides

const Wrapper = styled.div`
  margin: 2em 0;
`
