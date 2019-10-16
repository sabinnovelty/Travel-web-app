import React from 'react'
import styled from 'styled-components'

import Nepal from '../../../../assets/images/Nepal.jpg'
import Chile from '../../../../assets/images/chile.jpg'
import Iceland from '../../../../assets/images/iceland.jpg'
import Italy from '../../../../assets/images/italy.jpg'
import Spain from '../../../../assets/images/spain.jpg'
import Tanzania from '../../../../assets/images/tanzania.jpg'

const Destinations = () => {
  return (
    <>
      <Gallery>
        <Figure id={1}>
          <Img src={Nepal} alt="country-name" />
          <TextBlock>
            <Name>Nepal</Name>
            <Tours>579 tours</Tours>
          </TextBlock>
        </Figure>
        <Figure id={2}>
          <Img src={Chile} alt="country-name" />
          <TextBlock>
            <Name>Chile</Name>
            <Tours>248 tours</Tours>
          </TextBlock>
        </Figure>
        <Figure id={3}>
          <Img src={Iceland} alt="country-name" />
          <TextBlock>
            <Name>Iceland</Name>
            <Tours>144 tours</Tours>
          </TextBlock>
        </Figure>
        <Figure id={4}>
          <Img src={Italy} alt="country-name" />
          <TextBlock>
            <Name>Italy</Name>
            <Tours>642 tours</Tours>
          </TextBlock>
        </Figure>
        <Figure id={5}>
          <Img src={Spain} alt="country-name" />
          <TextBlock>
            <Name>Spain</Name>
            <Tours>388 tours</Tours>
          </TextBlock>
        </Figure>
        <Figure id={6}>
          <Img src={Tanzania} alt="country-name" />
          <TextBlock>
            <Name>Tanzania</Name>
            <Tours>460 tours</Tours>
          </TextBlock>
        </Figure>
      </Gallery>
    </>
  )
}

export default Destinations

function styleFigure(id) {
  switch(id) {
    case 1:
    return `
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3;
    `
    case 2:
      return `
      grid-column-start: 3;
      grid-column-end: 5;
      grid-row-start: 1;
      grid-row-end: 3;
    `
    case 3:
      return `
      grid-column-start: 5;
      grid-column-end: 9;
      grid-row-start: 1;
      grid-row-end: 6;
    `
    case 4:
      return `
      grid-column-start: 1;
      grid-column-end: 5;
      grid-row-start: 3;
      grid-row-end: 6;
    `
    case 5:
      return `
      grid-column-start: 1;
      grid-column-end: 5;
      grid-row-start: 6;
      grid-row-end: 9;
    `
    case 6:
      return `
      grid-column-start: 5;
      grid-column-end: 9;
      grid-row-start: 6;
      grid-row-end: 9;
    `
    default:
      return `
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 3;
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
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  bottom: 20px;
`,
Name = styled.span`
  color: green;
  background: white;
  text-transform: uppercase;
  padding: 0 10px;
`,
Tours = styled.span`
  color: white;
  background: green;
  padding: 0 10px;
`