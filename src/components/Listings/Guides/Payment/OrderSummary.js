import React from 'react'
import styled from 'styled-components'

import Container from '../../../../commons/Style/Container'
import Row from '../../../../commons/Style/Row'
import Card from '../../../../commons/Cards'

const OrderSummary = () => {
  const [showBreakdown, setShowBreakdown] = React.useState(false)
  return (
    <Container>
      <Row>
        <Wrapper>
          <Card>
            <Card.Header>
              <H2>Summary</H2>
            </Card.Header>
            <Card.Content>
              <Date>September 17, 2019 - September 20, 2019</Date>
              <Name>Person Name</Name>
              <Detail>
                <LI>
                  <Key>Trek Name:</Key>
                  <Value>Everest Base Camp</Value>
                </LI>
                <LI>
                  <Key>No. of people:</Key>
                  <Value>1</Value>
                </LI>
                <LI>
                  <Key>No. of days:</Key>
                  <Value>4</Value>
                </LI>
                <LI>
                  <Key>Daily Wage:</Key>
                  <Value>USD 40 Per Day</Value>
                </LI>
              </Detail>
              <hr />
              <PriceBreakdown>
                <BreakdownLink onClick={() => setShowBreakdown(!showBreakdown)}>
                  View all price breakdown
                </BreakdownLink>
                {showBreakdown && (
                  <>
                    <UL>
                      <LI>
                        <Key>Guide total cost:</Key>
                        <Value>(USD 25/Day x 4 Days) USD 100</Value>
                      </LI>
                      <LI>
                        <Key>Guide insurance:</Key>
                        <Value>USD 30</Value>
                      </LI>
                    </UL>
                  </>
                )}
              </PriceBreakdown>
              <hr />
              <ServiceList>
                <UL>
                  <Service>
                    <Key>Grand Total:</Key>
                  </Service>
                </UL>
              </ServiceList>
            </Card.Content>
          </Card>
        </Wrapper>
      </Row>
    </Container>
  )
}

export default OrderSummary

const Wrapper = styled.div``,
  H2 = styled.h2``,
  Date = styled.h3`
    color: #999;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 0;
  `,
  Name = styled.h3`
    font-size: 18px;
    font-weight: 700;
    color: #000;
    margin-top: 3px;
  `,
  Detail = styled.ul``,
  LI = styled.li`
    line-height: 29px;
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
  `,
  Key = styled.span`
    flex: 0 0 35%;
  `,
  Value = styled.span`
    display: flex;
    flex-direction: column;
    line-height: 29px;
    text-align: right;
    flex: 0 0 65%;
    color: ${props => props.color && props.color};
  `,
  ServiceList = styled.div`
    margin-bottom: 5px;
  `,
  UL = styled.ul`
    margin-bottom: 0;
  `,
  Service = styled.li`
    display: flex;
    line-height: 30px;
    font-size: 16px;
  `,
  PriceBreakdown = styled.div``,
  BreakdownLink = styled.span`
    color: #3a5db7;
  `
