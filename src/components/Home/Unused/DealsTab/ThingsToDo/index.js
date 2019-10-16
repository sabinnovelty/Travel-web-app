import React from 'react'
import styled from 'styled-components'

import Everest from '../../../../../assets/images/Everest.jpg'
import Tanzania from '../../../../../assets/images/safari-in-tanzania.jpg'
import SightSeeingTours from '../../../../../assets/images/sight-seeing-tours.jpg'
import FoodTours from '../../../../../assets/images/food-tours.jpg'
import Kilimanjaro from '../../../../../assets/images/kilimanjaro.jpg'
import ElephantSafari from '../../../../../assets/images/elephant-safari.jpg'

const ThingsToDo = () => {
  return (
    <>
        <Gallery>
          <Figure id={1}>
            <Img src={Everest} alt="country-name" />
            <TextBlock>
              <Name>Everest Base Camp Trek</Name>
              <Tours>+25 tours available</Tours>
            </TextBlock>
          </Figure>
          <Figure id={2}>
            <Img src={Tanzania} alt="country-name" />
            <TextBlock>
              <Name>Safaris in Tanzania</Name>
              <Tours>+120 tours available</Tours>
            </TextBlock>
          </Figure>
          <Figure id={3}>
            <Img src={SightSeeingTours} alt="country-name" />
            <TextBlock>
              <Name>Sightseeing Tours</Name>
              <Tours>+600 tours available</Tours>
            </TextBlock>
          </Figure>
          <Figure id={4}>
            <Img src={FoodTours} alt="country-name" />
            <TextBlock>
              <Name>Food Tours</Name>
              <Tours>+160 tours available</Tours>
            </TextBlock>
          </Figure>
          <Figure id={5}>
            <Img src={Kilimanjaro} alt="country-name" />
            <TextBlock>
              <Name>Kilimanjaro</Name>
              <Tours>+100 climbs available</Tours>
            </TextBlock>
          </Figure>
          <Figure id={6}>
            <Img src={ElephantSafari} alt="country-name" />
            <TextBlock>
              <Name>Safaris</Name>
              <Tours>+190 tours available</Tours>
            </TextBlock>
          </Figure>
        </Gallery>
    </>
  )
}

export default ThingsToDo

function styleFigure(id) {
  switch(id) {
    case 1:
    return `
      grid-column-start: 1;
      grid-column-end: 5;
      grid-row-start: 1;
      grid-row-end: 4;
    `
    case 2:
      return `
      grid-column-start: 5;
      grid-column-end: 9;
      grid-row-start: 1;
      grid-row-end: 4;
    `
    case 3:
      return `
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 4;
      grid-row-end: 8;
    `
    case 4:
      return `
      grid-column-start: 3;
      grid-column-end: 5;
      grid-row-start: 4;
      grid-row-end: 8;
    `
    case 5:
      return `
      grid-column-start: 5;
      grid-column-end: 7;
      grid-row-start: 4;
      grid-row-end: 8;
    `
    case 6:
      return `
      grid-column-start: 7;
      grid-column-end: 9;
      grid-row-start: 4;
      grid-row-end: 8;
    `
    default:
      return `
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 4;
      `
  }
}

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 5vw);
  grid-gap: 15px;
`,
Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,
Figure = styled.figure`
  position: relative;
  ${props => props.id && styleFigure(props.id)}
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
Tours = styled.p`
  color: white;
  font-weight: bold;
  font-size: 1em;
  margin-top: -20px;
`