import React from 'react'
import styled from 'styled-components'

import Card from '../../../../commons/Cards'
import items from './items'

const Guides = () => {
  return (
    <>
      <SliderWrapper>
        {items().map(item => {
          return (
            <StyledCard key={item.id} css="width: 500px;">
              <Card.Header css="padding: 0;">
                <Img src={item.image} alt={item.name} />
              </Card.Header>
              <Card.Content>
                <Title>{item.title}</Title>
                <Subtitle>{item.location}</Subtitle>
              </Card.Content>
            </StyledCard>
          )
        })}
      </SliderWrapper>
    </>
  )
}

export default Guides

const SliderWrapper = styled.div`
    overflow: hidden;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  `,
  StyledCard = styled(Card)`
    flex: 1 0 21%;
    margin: 5px;
  `,
  Img = styled.img`
    width: 100%;
    min-width: 200px;
    max-height: 120px;
    min-height: 120px;
  `,
  Title = styled.p`
    font-size: 14px;
    font-weight: bold;
  `,
  Subtitle = styled.p`
    font-size: 12px;
    margin-top: -12px;
  `
