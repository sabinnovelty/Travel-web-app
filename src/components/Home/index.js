import React from 'react'
import styled from 'styled-components'
// import {Link} from 'react-router-dom'

import theme from '../../constants/theme'
import Button from '../../commons/Buttons'
import Container from '../../commons/Style/Container'
import Row from '../../commons/Style/Row'
import Header from './Header'
import Benefits from './Benefits'
import Steps from './Steps'
import FeaturedGuides from './Listings/FeaturedGuides'
import Notice from './Notice'
import Featured from './Featured'
import FootNote from './FootNote'
import Footer from '../../commons/Footer'
import RequestPorter from '../../components/Listings/Guides/RequestPorter'

const Home = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <Header />
      <Benefits />
      <Container>
        <Row>
          <Steps />
        </Row>
        <Row>
          <H2 noBorder>Featured Guides</H2>
          <FeaturedGuides />
        </Row>
        <Row>
          <CTA>
            <Button>
              <Button.Content onClick={() => setIsOpen(true)}>
                Request porter guide
              </Button.Content>
            </Button>
          </CTA>
          {isOpen && <RequestPorter isOpen={isOpen} setIsOpen={setIsOpen} />}
        </Row>
      </Container>
      <Notice />
      <Container>
        <Row>
          <H2 noBorder>As Seen In:</H2>
          <Featured />
        </Row>
      </Container>
      <Footer />
      <FootNote />
    </>
  )
}

export default Home

const H2 = styled.h2`
    color: ${theme.color.primary};
    font-weight: 900;
    margin-top: 1em;
    padding-bottom: 0.2em;
    text-align: center;
    position: relative;
    ${props =>
      !props.noBorder &&
      `
  :after {
    content: ' ';
    position: absolute;
    top: 100%;
    left: 50%;
    width: 10%;
    border: 3px solid ${theme.color.primary};
    border-radius: 4px;
    box-shadow:inset 0 1px 1px rgba(0, 0, 0, .05);
    transform:translateX(-50%);
  }
  `}
  `,
  CTA = styled.div`
    text-align: center;
    padding: 50px 0;
  `
