import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Card from '../../../../commons/Cards'
import HotelImg from '../../../../assets/images/hotel1.jpeg'
import items from './items'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  adaptiveHeight: true,
  autoplay: false,
  slidesToShow: 4,
  slidesToScroll: 3,
}

const Lodges = () => {
  return (
    <>
      <SliderWrapper>
        <Slider {...settings}>
          {items().map(item => {
            return (
              <StyledCard key={item.id} css="width: 500px;">
                <Card.Header css="padding: 0;">
                  <Img src={HotelImg} alt={item.name} />
                </Card.Header>
                <Card.Content>
                  <Title>{item.title}</Title>
                  <Subtitle>{item.location}</Subtitle>
                </Card.Content>
              </StyledCard>
            )
          })}
        </Slider>
      </SliderWrapper>
    </>
  )
}

export default Lodges

const SliderWrapper = styled.div`
    overflow: hidden;
    position: relative;
    .slick-slide {
      & > div {
        margin: 0 10px;
      }
    }
  `,
  StyledCard = styled(Card)`
    width: 500px;
  `,
  Img = styled.img`
    width: 100%;
    min-width: 200px;
  `,
  Title = styled.p`
    font-size: 14px;
    font-weight: bold;
  `,
  Subtitle = styled.p`
    font-size: 12px;
    margin-top: -12px;
  `
