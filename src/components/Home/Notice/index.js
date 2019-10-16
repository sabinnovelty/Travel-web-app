import React from 'react'
import styled from 'styled-components'

const Notice = () => {
  return (
    <>
      <Wrapper>
        <Title>Keep things flexible</Title>
        <SubTitle>
          Incase plans change, you can cancel booking for free up to 24 hours
          before they start. If you never need us, customer service is available
          24/7 in multiple languages.
        </SubTitle>
      </Wrapper>
    </>
  )
}

export default Notice

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #005b61;
    padding: 4em;
  `,
  Title = styled.strong`
    font-size: 3em;
    color: #d7ffdc;
  `,
  SubTitle = styled.p`
    font-size: 1em;
    color: #d7ffdc;
    width: 50%;
    text-align: center;
    @media (max-width: 721px) {
      width: 100%;
    }
  `
