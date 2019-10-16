import React from 'react'
import styled from 'styled-components'

import Card from '../../../../commons/Cards'
import Lodges from './Lodges'

const FeaturedLodges = () => {
  return (
    <>
      <Wrapper>
        <Card>
          <Card.Header>
            <Header>
              <RightLabel>FEATURED LODGES</RightLabel>
              <LeftLabel>See All</LeftLabel>
            </Header>
          </Card.Header>
          <Card.Content>
            <Lodges />
          </Card.Content>
        </Card>
      </Wrapper>
    </>
  )
}

export default FeaturedLodges

const Wrapper = styled.div`
    margin: 2em 0;
  `,
  Header = styled.div`
    display: flex;
    justify-content: space-between;
  `,
  RightLabel = styled.span`
    font-size: 16px;
  `,
  LeftLabel = styled.span`
    font-size: 14px;
  `
