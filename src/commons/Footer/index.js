import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faTwitter, faInstagram, faPinterest} from '@fortawesome/free-brands-svg-icons'

import Container from '../../commons/Style/Container'
import Row from '../../commons/Style/Row'
import {TextField} from '../../commons/Forms/InputField'
import Button from '../../commons/Buttons'
import theme from '../../constants/theme'
import TourismBoard from '../../assets/images/tourism-board.png'
import VisitNepal from '../../assets/images/visit-nepal.png'
import Stripe from '../../assets/images/stripe.png'

const Footer = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Row>
            <InnerSection>
              <Column6>
                <Column>
                  <Column3>
                    <Strong>Company</Strong>
                    <ul>
                      <LI>Home</LI>
                      <LI>About us</LI>
                      <LI>Privacy</LI>
                      <LI>Data policy</LI>
                      <LI>Sitemap</LI>
                    </ul>
                  </Column3>
                  <Column3>
                    <Strong>Work with us</Strong>
                    <ul>
                      <LI>Become Partner</LI>
                      <LI>Become Affiliate</LI>
                      <LI>Associations</LI>
                      <LI>Press</LI>
                    </ul>
                  </Column3>
                  <Column3>
                    <Strong>Supporting</Strong>
                    <ul>
                      <li><Img src={TourismBoard} alt="tourism-board" /></li>
                      <li><Img src={VisitNepal} alt="visit-nepal" /></li>
                    </ul>
                  </Column3>
                </Column>
              </Column6>
              <Column6>
                <Column>
                  <Column6>
                    <Strong>Get exclusive deals</Strong>
                    <Inline>
                      <TextField name="deals" placeholder="Your email address" />
                      <Button>
                        <Button.Content>Submit</Button.Content>
                      </Button>
                    </Inline>
                    <p style={{ textAlign: 'right', fontWeight: 'bold' }}>upto 30% discount</p>
                  </Column6>
                  <Column6 style={{ marginLeft: 20 }}>
                    <Strong>Join us on</Strong>
                    <SocIcons>
                      <FontAwesomeIcon icon={faFacebook} size="2x" style={{ paddingRight: 10 }} />
                      <FontAwesomeIcon icon={faTwitter} size="2x" style={{ padding: '0 5px' }} />
                      <FontAwesomeIcon icon={faPinterest} size="2x" style={{ padding: '0 5px' }} />
                      <FontAwesomeIcon icon={faInstagram} size="2x" style={{ padding: '0 5px' }} />
                    </SocIcons>
                    <Img src={Stripe} style={{ width: 150 }} />
                  </Column6>
                </Column>
              </Column6>
            </InnerSection>
          </Row>
        </Container>
      </Wrapper>
    </>
  )
}

export default Footer

const Wrapper = styled.div`
  background: white;
  padding-top: 20px;
  box-shadow: 0 0 10px #3333;
  margin-top: 3em;
`,
InnerSection = styled.div`
  display: flex;
`,
Column = styled.div`
  display: flex;
`,
Column6 = styled.div`
  flex-basis: 50%;
`,
Column3 = styled.div`
  flex-basis: 33.33%;
`,
LI = styled.li`
  color: #777;
  padding: 4px 0;
`,
Img = styled.img`
  max-width: 100%;
  width: 80px;
  height: auto;
`,
Inline = styled.div`
  display: flex;
`,
SocIcons = styled.div`
  display: flex;
`,
Strong = styled.strong`
  color: ${theme.color.primary};
`