import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBrain, faSearch, faHotel} from '@fortawesome/free-solid-svg-icons'

import theme from '../../../constants/theme'

const Steps = () => {
  return (
    <>
      <Stepper>
        <LI>
          <Step>
            <StepNumber>
              <FontAwesomeIcon icon={faBrain} />
            </StepNumber>
            <TextWrapper>
              <StepText primary>Step 1</StepText>
              <StepText>Plan Your Trek</StepText>
            </TextWrapper>
          </Step>
        </LI>
        <LI>
          <Step>
            <StepNumber>
              <FontAwesomeIcon icon={faSearch} />
            </StepNumber>
            <TextWrapper>
              <StepText primary>Step 2</StepText>
              <StepText>Find Your Perfect Trek</StepText>
            </TextWrapper>
          </Step>
        </LI>
        <LI>
          <Step>
            <StepNumber>
              <FontAwesomeIcon icon={faHotel} />
            </StepNumber>
            <TextWrapper>
              <StepText primary>Step 3</StepText>
              <StepText>Book Your Treks Directly</StepText>
            </TextWrapper>
          </Step>
        </LI>
      </Stepper>
    </>
  )
}

export default Steps

const Stepper = styled.ul`
    position: relative;
    margin-top: 30px;
    margin-right: 1rem;
    margin-bottom: 4rem;
    margin-left: 1rem;
    display: flex;
    justify-content: space-evenly;
    padding-left: 0;
    list-style-type: none;
  `,
  LI = styled.li``,
  Step = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 0;
  `,
  StepNumber = styled.span`
    width: 2.25rem;
    height: 2.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e9ecee;
    border: 2px solid #e9ecee;
    border-radius: 50%;
    background-color: ${theme.color.primary};
    color: #fff;
    border: 2px solid ${theme.color.primary};
  `,
  TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
  `,
  StepText = styled.strong`
    display: flex;
    ${props =>
      props.primary
        ? `
    color: ${theme.color.primary};
    font-size: 1.4rem;
    font-weight: bold;
  `
        : `
    color: theme.color.text.primary;
    font-size: 0.9rem;
  `}
    justify-content: center;
    text-align: center;
    padding-top: 10px;
  `

// :before {
//     content: '';
// 		position: absolute;
// 		height: 5px;
// 		width: calc(100% - 10px);
// 		top: 18px;
// 		left: 5px;
// 		background-color: lightgrey;
// 		z-index: -1;
//   }
