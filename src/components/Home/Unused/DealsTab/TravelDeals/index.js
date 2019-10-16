import React from 'react'
import styled from 'styled-components'

import Everest from '../../../../../assets/images/Everest.jpg'
import Tanzania from '../../../../../assets/images/safari-in-tanzania.jpg'
import SightSeeingTours from '../../../../../assets/images/sight-seeing-tours.jpg'
import FoodTours from '../../../../../assets/images/food-tours.jpg'
import Kilimanjaro from '../../../../../assets/images/kilimanjaro.jpg'
import ElephantSafari from '../../../../../assets/images/elephant-safari.jpg'

const TravelDeals = () => {
  return (
    <>
        <Gallery>
          <Figure id={1}>
            <Img src={Everest} alt="country-name" />
            <TextBlock>
              <Name>Europe</Name>
              <DealsBtn>See Deals</DealsBtn>
            </TextBlock>
          </Figure>
          <Figure id={2}>
            <Img src={Tanzania} alt="country-name" />
            <TextBlock>
              <Name>Asia</Name>
              <DealsBtn>See Deals</DealsBtn>
            </TextBlock>
          </Figure>
          <Figure id={3}>
            <Img src={SightSeeingTours} alt="country-name" />
            <TextBlock>
              <Name>North America</Name>
              <DealsBtn>See Deals</DealsBtn>
            </TextBlock>
          </Figure>
          <Figure id={4}>
            <Img src={FoodTours} alt="country-name" />
            <TextBlock>
              <Name>South America</Name>
              <DealsBtn>See Deals</DealsBtn>
            </TextBlock>
          </Figure>
          <Figure id={5}>
            <Img src={Kilimanjaro} alt="country-name" />
            <TextBlock>
              <Name>Africa</Name>
              <DealsBtn>See Deals</DealsBtn>
            </TextBlock>
          </Figure>
          <Figure id={6}>
            <Img src={ElephantSafari} alt="country-name" />
            <TextBlock>
              <Name>Oceania</Name>
              <DealsBtn>See Deals</DealsBtn>
            </TextBlock>
          </Figure>
        </Gallery>
    </>
  )
}

export default TravelDeals

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
`,
Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,
Figure = styled.figure`
  position: relative;
`,
TextBlock = styled.div`
  left: 0;
  position:absolute;
  text-align:center;
  bottom: 60px;
  width: 100%;
`,
Name = styled.p`
  color: white;
  font-weight: bold;
  font-size: 2em;
`,
DealsBtn = styled.button`
  font-weight: bold;
  font-size: 1em;
  margin-top: -20px;
  border: solid 1px white;
`