import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faPlaneDeparture,
  faHandHoldingUsd,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating'

import theme from '../../../constants/theme'
import Container from '../../../commons/Style/Container'
import Row from '../../../commons/Style/Row'

const Benefits = () => {
  return (
    <>
      <Wrapper>
        <Container fluid>
          <Row>
            <BenefitsColumn>
              <BenefitContainer>
                <Benefit>
                  <Text>GuideBook gives you</Text>
                </Benefit>
              </BenefitContainer>
              <BenefitContainer>
                <Benefit>
                  <FontAwesomeIcon
                    icon={faPlaneDeparture}
                    style={{color: theme.color.primary}}
                  />
                  <Text style={{paddingLeft: 8}}>
                    +12,500 Tours & holidays world wide
                  </Text>
                </Benefit>
              </BenefitContainer>
              <BenefitContainer>
                <Benefit>
                  <FontAwesomeIcon
                    icon={faHandHoldingUsd}
                    style={{color: theme.color.primary}}
                  />
                  <Text style={{paddingLeft: 8}}>Best price guranteed</Text>
                </Benefit>
              </BenefitContainer>
              <BenefitContainer>
                <Benefit>
                  <Review>
                    <Span>
                      <Rating
                        readonly
                        fullSymbol={
                          <FontAwesomeIcon
                            icon={faStar}
                            style={{color: theme.color.primary}}
                          />
                        }
                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                        initialRating={5}
                      />
                      <Remark>
                        4.9 - <Text primary>Excellent</Text>
                      </Remark>
                    </Span>
                    <Text>Based on +22,500 trip reviews</Text>
                  </Review>
                </Benefit>
              </BenefitContainer>
            </BenefitsColumn>
          </Row>
        </Container>
      </Wrapper>
    </>
  )
}

export default Benefits

const Wrapper = styled.div`
    background: #fff;
    position: relative;
    z-index: 1;
    box-shadow: 0 0 10px #3333;
  `,
  BenefitsColumn = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
  `,
  BenefitContainer = styled.div`
    padding: 4px 3px;
    @media (max-width: 979px) {
      padding: 5px 3px;
    }
  `,
  Benefit = styled.div``,
  Text = styled.strong`
    text-transform: uppercase;
    color: #2a3439;
    font-size: 0.8em;
    outline: none;
    ${props =>
      props.primary &&
      `
    color: ${theme.color.primary};
  `}
  `,
  Review = styled.div`
    display: flex;
    flex-direction: column;
  `,
  Span = styled.span`
    display: flex;
  `,
  Remark = styled.span`
    margin-top: 0;
  `
