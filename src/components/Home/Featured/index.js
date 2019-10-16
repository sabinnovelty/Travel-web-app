import React from 'react'
import styled from 'styled-components'

const Featured = () => {
  return (
    <>
      <Wrapper>
        <Img src="https://www.bookmundi.com/themes/global/resources/images/logos/press/@2x/tech.co.png" />
        <Img src="https://www.bookmundi.com/themes/global/resources/images/logos/press/@2x/travolution.png" />
        <Img src="https://www.bookmundi.com/themes/global/resources/images/logos/press/@2x/forbes.png" />
        <Img src="https://www.bookmundi.com/themes/global/resources/images/logos/press/@2x/independent.png" />
        <Img src="https://www.bookmundi.com/themes/global/resources/images/logos/press/@2x/entrepreneur.png" />
      </Wrapper>
    </>
  )
}

export default Featured

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 1em;
  `,
  Img = styled.img`
    max-width: 100%;
    width: 150px;
  `
